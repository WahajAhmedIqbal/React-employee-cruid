import React from 'react'

function AddedEmpolye(props) {

    const { ademp } = props

    // const newfun = function(){
    //     const newvari = addedemp.map(function(index){
    //         return<ul>
    //             <li>{index}</li>
    //         </ul>
    //     })
    //     console.log('vari' , newvari)
    // }
    
    return (
        <div>
            <h1 >this is add </h1>
            {
                ademp.map(function(item , index){
                    return<ul>
                    <li key={index}>{index +1 }</li>
                        <li>{item.employename}</li>
                        <li>{item.employeeposition}</li>
                        <button >click index num </button>
                        </ul>
                })
            }
        </div>
    )
}

export default AddedEmpolye
