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
import ShowFilterResultsMobile from "@/components/sidebarFacet/ShowFilterResultsMobile";

const SideBar = () => {
  return (
    <div className="w-full md:w-[300px] bg-custom-background">
      <div className="hidden lg:block">
        <ResultSize />
      </div>
      <FilterMenu />
      <SortingFacet
        field="sort_by"
        label="Sort by"
        view={SortingView}
        sortOptions={[
          { label: "Relevance", value: " " },
          {
            label: "Newest First",
            value: "created_at:desc",
          },
          {
            label: "Oldest First",
            value: "created_at:asc",
          },
        ]}
      />
      {getFacetFields().map((field) => (
        <Facet
          key={field}
          field={field}
          isFilterable={getFacetWithSearch().includes(field)}
          label={field}
          view={CustomMultiCheckboxFacet}
        />
      ))}
      <ShowFilterResultsMobile />
    </div>
  );
};

export default SideBar;
