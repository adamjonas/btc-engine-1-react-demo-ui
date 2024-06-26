import React from "react";
import { WithSearch } from "@elastic/react-search-ui";
import {
  AutocompleteResult,
  AutocompleteSuggestion,
  SearchContextState,
} from "@elastic/search-ui";
import { SearchBoxViewProps } from "./SearchBoxView";

export type SearchBoxContainerContext = Pick<
  SearchContextState,
  "autocompletedResults" | "autocompletedSuggestions" | "setSearchTerm"
>;

export type SearchBoxContainerProps = {
  view?: React.ComponentType<SearchBoxViewProps>;
  autocompleteMinimumCharacters?: number;
  autocompleteResults?: AutocompleteResult | boolean;
  autocompleteSuggestions?: boolean | AutocompleteSuggestion;
  shouldClearFilters?: boolean;
  debounceLength?: number;
  className?: string;
  onSelectAutocomplete?: (value: AutocompleteSuggestion) => void;
  onSubmit: (searchTerm: string) => void;
};

const SearchBoxContainer = (
  props: SearchBoxContainerContext & SearchBoxContainerProps
) => {
  const _a = props;
  const {
    autocompleteMinimumCharacters,
    autocompleteResults,
    autocompleteSuggestions,
    autocompletedResults,
    autocompletedSuggestions,
    setSearchTerm,
    className,
    onSelectAutocomplete,
    onSubmit,
    view,
    ...rest
  } = _a;

  const handleChange = (value: string) => {
    const options = Object.assign(
      Object.assign(
        { autocompleteMinimumCharacters },
        (autocompleteResults || autocompleteSuggestions) && {
          debounce: 2,
        }
      ),
      {
        shouldClearFilters: true,
        refresh: false,
        autocompleteResults: !!autocompleteResults,
        autocompleteSuggestions: !!autocompleteSuggestions,
      }
    );
    setSearchTerm(value, options);
  };

  const useAutocomplete = !!autocompleteSuggestions;
  const autocompletedSuggestionsCount = Object.entries(
    autocompletedSuggestions
  ).reduce((acc, [_, value]) => acc + value.length, 0);
  const allAutocompletedItemsCount =
    autocompletedSuggestionsCount + autocompletedResults.length;

  const viewProps = Object.assign(
    {
      allAutocompletedItemsCount: allAutocompletedItemsCount,
      autocompletedResults: autocompletedResults,
      autocompletedSuggestions: autocompletedSuggestions,
      className,
      autocompletedSuggestionsCount: autocompletedSuggestionsCount,
      onChange: (value: string) => handleChange(value),
      onSelectAutocomplete,
      onSubmit: onSubmit,
      useAutocomplete: useAutocomplete,
    },
    rest
  );
  return React.createElement<SearchBoxViewProps>(
    view,
    Object.assign({}, viewProps)
  );
};

const SearchBox = (props: SearchBoxContainerProps) => {
  return (
    <WithSearch
      mapContextToProps={({
        autocompletedResults,
        autocompletedSuggestions,
        setSearchTerm,
      }) => ({
        autocompletedResults,
        autocompletedSuggestions,
        setSearchTerm,
      })}
    >
      {({ autocompletedResults, autocompletedSuggestions, setSearchTerm }) => {
        return (
          <SearchBoxContainer
            {...props}
            autocompletedResults={autocompletedResults}
            autocompletedSuggestions={autocompletedSuggestions}
            setSearchTerm={setSearchTerm}
          />
        );
      }}
    </WithSearch>
  );
};

export default SearchBox;
