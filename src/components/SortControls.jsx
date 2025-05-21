import { useSearchParams } from "react-router-dom";

export const SortControls = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    searchParams.set("sort_by", e.target.value);
    setSearchParams(searchParams);
  };

  const handleOrderChange = (e) => {
    searchParams.set("order", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div className="sort-controls">
      <label>
        Sort by:
        <select
          value={searchParams.get("sort_by") || "created_at"}
          onChange={handleSortChange}
        >
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comment Count</option>
        </select>
      </label>

      <label>
        Order:
        <select
          value={searchParams.get("order") || "desc"}
          onChange={handleOrderChange}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
    </div>
  );
};
