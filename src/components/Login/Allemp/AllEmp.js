import React from 'react'

function AllEmp(props) {

    const {addallemp , ademp ,deletefun , addedemp} = props

    
    return (
        <div>
            <h1>all Emp</h1>
            <table border='1'>
                <thead>
                <tr>
                    <th>S No </th>
                    <th>emp name</th>
                    <th>emp position</th>
                </tr>
                </thead>
                {ademp.map(function(item , index){
                    return <tbody>
                    <tr>
                        <td>{index +1 }</td>
                        <td>{item.employename}</td>
                        <td>{item.employeeposition}</td>
                        <td><button onClick={() => addedemp(index)}>Add Empolyee</button></td>
                        <td><button onClick={() => deletefun(index)}>Delete emp</button></td>
                    </tr>
                    </tbody>
                })

                }

            </table>
            <button onClick={addallemp} >clic to go </button>
        </div>
    )
}

export default AllEmp
