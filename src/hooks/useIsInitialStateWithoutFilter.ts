import { useRouter } from "next/router";
import useSearchQuery from "./useSearchQuery";
import { generateFilterQuery } from "@/service/URLManager/helper";

const useIsInitialStateWithoutFilter = () => {
  let hiddenBody = true;
  let hiddenHomeFacet = true;

  const { searchQuery, queryResult } = useSearchQuery();
  const router = useRouter();

  const hasFilters = generateFilterQuery(router.asPath.slice(1)).length;
  let isHomePage = Object.keys(router.query).length === 0;

  const resultLength = queryResult.data?.hits?.total["value"];

  // visible if
  if (
    resultLength &&
    (searchQuery || hasFilters)
    // resultLength
  ) {
    hiddenBody = false;
  } else {
    hiddenHomeFacet = false;
  }

  return { hiddenBody, hiddenHomeFacet, isHomePage };
};

export default useIsInitialStateWithoutFilter;
