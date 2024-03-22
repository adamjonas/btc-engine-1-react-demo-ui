import { Sorting } from "@elastic/react-search-ui-views";

import React from "react";
import CustomMultiCheckboxFacet from "../components/customMultiCheckboxFacet/CustomMultiCheckboxFacet";
import { getFacetFields, getFacetWithSearch } from "../config/config-helper";
import useIsInitialStateWithoutFilter from "../hooks/useIsInitialStateWithoutFilter";
import Facet from "@/components/sidebarFacet/Facet";
import SortingFacet from "@/components/sidebarFacet/SortingFacet";
import SortingView from "@/components/sidebarFacet/Sorting/SortingView";
import ResultSize from "@/components/sidebarFacet/ResultSize";
import Image from "next/image";
import FilterMenu from "@/components/sidebarFacet/FilterMenu";

const SideBar = () => {
  const { hiddenBody, hiddenHomeFacet } = useIsInitialStateWithoutFilter();

  if (hiddenBody) {
    return null;
  }

  return (
    <div className="w-[300px]">
      <ResultSize />
      <FilterMenu />
      <SortingFacet
        field="sort_by"
        label="Sort by"
        view={SortingView}
        sortOptions={[
          { label: "Relevance", value: " " },
          {
            label: "Date published (newest)",
            value: "created_at:desc",
          },
          {
            label: "Date published (oldest)",
            value: "created_at:asc",
          },
          {
            label: "Date added (newest)",
            value: "indexed_at:desc",
          },
          {
            label: "Date added (oldest)",
            value: "indexed_at:asc",
          },
        ]}
      />
      {hiddenHomeFacet
        ? getFacetFields().map((field) => (
            <Facet
              key={field}
              field={field}
              isFilterable={getFacetWithSearch().includes(field)}
              label={field}
              view={CustomMultiCheckboxFacet}
            />
          ))
        : getFacetFields()
            .filter((field) => !getFacetWithSearch().includes(field))
            .map((field) => (
              <Facet
                key={field}
                field={field}
                isFilterable={getFacetWithSearch().includes(field)}
                label={field}
                view={CustomMultiCheckboxFacet}
              />
            ))}
    </div>
  );
};

export default SideBar;
