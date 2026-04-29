
export default function Table({ columns, data, renderActions }) {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
          {renderActions && <th>Actions</th>}
        </tr>
      </thead>

      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((col) => (
              <td key={col}>{row[col.toLowerCase()]}</td>
            ))}

            {renderActions && (
              <td className="actions-cell">
                {renderActions(row)}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}