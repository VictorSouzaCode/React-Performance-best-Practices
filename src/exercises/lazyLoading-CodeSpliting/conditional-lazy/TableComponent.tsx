
// eager loaded (normal import, part of the main bundle).
const TableComponent = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
        }}>
            <h2>📊 Table Component (Eager Loaded)</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Item A</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Item B</td>
                        <td>200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent