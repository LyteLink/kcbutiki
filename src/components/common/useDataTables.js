"use client";
import { useEffect } from "react";
import "datatables.net-dt/css/jquery.dataTables.min.css";

const useDataTables = () => {
  useEffect(() => {
    let table;

    if (typeof window !== "undefined") {
      import("datatables.net-dt").then(() => {
        const $ = require("jquery");
        table = $("#my-table").DataTable({
          paging: true,
          ordering: true,
          language: { search: "", searchPlaceholder: "Search..." },
          initComplete: function () {
            const dataTableWrapper = $(".dataTables_wrapper");
            const selectBox = dataTableWrapper.find(".dataTables_length");
            const searchInput = dataTableWrapper.find(".dataTables_filter");

            const newDiv = $("<div class='custom_filters'></div>");
            newDiv.append(selectBox);
            newDiv.append(searchInput);

            dataTableWrapper.prepend(newDiv);
          },
        });
      });
    }

    return () => {
      if (table) {
        table.destroy();
      }
    };
  }, []);
};

export default useDataTables;
