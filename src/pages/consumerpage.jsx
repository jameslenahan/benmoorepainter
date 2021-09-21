import React, {useEffect, useState, setState} from "react";

import '../consumerpage.css'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const field2 = ""
const field3 = ""
const field4 = ""
const field5 = ""
const field6 =""
const field7 = ""
const field8 = ""

function Home(){
       const [field1data, setfield1data] = useState("")
       const [field2data, setfield2data] = useState("")
       const [field3data, setfield3data] = useState("")
       const [field4data, setfield4data] = useState("")
       const [field1, setField1] = useState("")
       const [page, setPage] = useState(0)
       const [pagedata, setPageData] = useState({
        "name": field1,
        "Address": field2,
        "Email": field3,
        "Brief Description": field4,
        "Type of Project": field5,
    }) 
        let field1name = ["Name", "Type of Project"]
        let field2name = ["Address", "Preferred Paint"]
        let field3name = ["Email", "Estimated square footage"]
        let field4name = ["Brief description", "Who will be ordering the paint?"]


        const incrementpage = () => {
            if (page == 0) {

          
           setPage(prevCount => prevCount +1);
           setField1(field1data)
           field2.replace(field2data)
           field3.replace(field3data)
           field4.replace(field4data)
        }
        if (page == 1) {

          
            setPage(prevCount => prevCount +1);
            field5.replace(field1data)
            field6.replace(field2data)
            field7.replace(field3data)
            field8.replace(field4data)
         }
        //    console.log(field1, field2, field3, field4)

            //api replace
        };
        const decrementpage = () => {
            if (page == 0) {

          
           setPage(prevCount => prevCount -1);
           field1.replace(field1data)
           field2.replace(field2data)
           field3.replace(field3data)
           field4.replace(field4data)
        }
        else {

          
            setPage(prevCount => prevCount -1);
            field5.replace(field1data)
            field6.replace(field2data)
            field7.replace(field3data)
            field8.replace(field4data)
         }
        //    console.log(field1, field2, field3, field4)

            //api replace
        };
        console.log(pagedata)
        return (
            
            <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Hello Bulma!</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
            <div className="consumerbox">
            <form className="box">
                <div className="field">
                    <label className="label">
                        {page == 0 ? field1name[page] : field1name[page]}
                    
                
                </label>
                    <div className="control">
                    <input className="input" 
                    type="text" 
                    placeholder="example" 
                    value={field1data}
                    onChange={e => setfield1data(e.target.value)}
                    
                    
                    />
                    </div>
                </div>
             <div className="field">
                    <label className="label">{page == 0 ? field2name[page] : field2name[page]}</label>
                    <div className="control">
                    <input className="input" 
                    type="text" 
                    placeholder="example" 
                    value={field2data}
                    onChange={e => setfield2data(e.target.value)}
                    
                    
                    />
                    </div>
                </div>
                <div className="field">
                    <label className="label">{page == 0 ? field3name[page] : field3name[page]}</label>
                    <div className="control">
                    <input className="input" 
                    type="text" 
                    placeholder="example" 
                    value={field3data}
                    onChange={e => setfield3data(e.target.value)}
                    
                    
                    />
                    </div>
                </div>
                <div className="field">
                    <label className="label">{page == 0 ? field4name[page] : field4name[page]}</label>
                    <div className="control">
                    <input className="input" 
                    type="text" 
                    placeholder="example" 
                    value={field4data}
                    onChange={e => setfield4data(e.target.value)}
                    
                    
                    />
                    </div>
                </div>
                <span className="icon">
                <a onClick={decrementpage}>
                <FontAwesomeIcon icon={faArrowLeft}>
                    

                    

                </FontAwesomeIcon>
                </a>


                    </span>
                <span className="icon">
                <a onClick={incrementpage}>
                <FontAwesomeIcon icon={faArrowRight}>
                    

                    

                </FontAwesomeIcon>
                </a>


                    </span>
                </form>
                </div>

          </div>       
            

           


)}
  
   
    


export default Home;

