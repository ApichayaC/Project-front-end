import React, { useState } from 'react'
import axios from 'axios'
import addCatStyles from '../styles/AddCats.module.css'

const addCats = (props) => {

    const [cat, setCat] = useState({
        firstName: "",
        branch: "",
        age: 0
    })
    const [showCatItems, setShowCatItems] = useState([])

    const allItemsCat = () => {
        return showCatItems.map((item, index) => {
            console.log(item);
            return (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.collar}</td>
                    <td>{item.shirt}</td>
                    <td>{item.Catid}</td>
                </tr>

            )
        })
    }

    const setDetailItem = (catId) => {
        const itemsCat = props.items.filter((item, index) => item.Catid == catId)
        setShowCatItems(itemsCat)
    }

    const showCats = () => {


        return props.cats.map((item, index) => {
            return (
                <tr key={index}>
                    <td >{item.id}</td>
                    <td >{item.firstName}</td>
                    <td >{item.branch}</td>
                    <td >{item.age}</td>
                    <td>
                        <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => { setDetailItem(item.id) }}>show items</button>
                    </td>
                </tr>

            )
        })
    }

    const addCat = async () => {
        if (!cat.age || !cat.branch || !cat.firstName) {
            alert("กรุณาระบุข้อมูลให้ครบและอายุเป็นตัวเลข")

        } else {
            const resultCat = await axios.post(props.URL + '/cats', { ...cat, age: +cat.age })
            console.log(resultCat);
        }
    }


    return (
        <div className={addCatStyles.divborder} >
            <div className={addCatStyles.divbg}>
                <h1>Add Cat</h1>
                <form>
                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label">name </label>
                        <div className="col-sm-9">
                            <input className="form-control" style={{borderRadius:25}}  onChange={e => { setCat({ ...cat, firstName: e.target.value }) }} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label">branch</label>
                        <div className="col-sm-9">
                            <input className="form-control" style={{borderRadius:25}}  onChange={e => { setCat({ ...cat, branch: e.target.value }) }} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label">age </label>
                        <div className="col-sm-9">
                            <input className="form-control" style={{borderRadius:25}}  onChange={e => { setCat({ ...cat, age: e.target.value }) }} />
                        </div>
                    </div>
                    <div className="row">

                        <button style={{borderRadius:25}}  className="btn btn-primary btn-sm" onClick={addCat}>Add Cat</button>
                    </div>
                </form>
            </div>
            <div className="container">

                <div className="row  justify-content-center">

                    <div className="col-sm-4">
                        <div>
                            <table >
                                <caption>Table Cats</caption>
                                <thead>
                                    <th>ID</th>
                                    <th>Firstname</th>
                                    <th>Branch</th>
                                    <th>Age</th>
                                    <th></th>
                                </thead>
                                <tbody>
                                    {showCats()}
                                </tbody>
                                <tfoot></tfoot>
                            </table>
                        </div></div>
                    <div className="col-sm-4">
                        <div>
                            {
                                <div>
                                    <table   >
                                        <caption>Items</caption>
                                        <thead>
                                            <th>ID</th>
                                            <th>collar</th>
                                            <th>shirt</th>
                                            <th>Catid</th>
                                        </thead>
                                        <tbody>
                                            {allItemsCat()}
                                        </tbody>
                                        <tfoot></tfoot>
                                    </table>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default addCats