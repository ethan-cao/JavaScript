import React from "react";
import {VisibilityFilters} from "../actions";
import FilterLink from "../container/FilterLink";

const FilterContainer = () => (
    < div>
        <span > Show: </span> 

        <FilterLink filter = {VisibilityFilters.SHOW_ALL} >
        All 
        </FilterLink> 
        
        <FilterLink filter = {VisibilityFilters.SHOW_ACTIVE} >
        Active 
        </FilterLink> 
        
        <FilterLink filter = {VisibilityFilters.SHOW_COMPLETED } >
        Completed 
        </FilterLink>
    </div>
);

export default FilterContainer;