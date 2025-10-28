const cds = require('@sap/cds');


module.exports = async (srv) => {
   
   
   srv.on('POST', 'results', async (ok) => {

    let find ;
        const req= ok.data;
        //  console.log(ok.target.elements);
        // ok.target.elements.status= Integer;
        // console.log(ok.target.elements.status);
        console.log(req);
        let obj = {};
        // let  req =
        // {
        //      "soldTo": req.soldTo,
        //     "search": req.search,
        //     "searchBy": req.searchBy,
        //     "fromDate": req.fromDate,
        //     "toDate": req.toDate,
        //     "status": req.status,
        //     "orderType":req.orderType,
        //     "sort":req.sort,
        //     "dir": req.dir,
        //     "currentPage": req.currentPage,
        //     "pageSize": req.pageSize
        // }


        if(req.soldTo !== ""){
            obj.soldTo = req.soldTo;
            if(!find){
                find = 'soldTo ='.concat(`'${req.soldTo}'`) ;
            }else{
                find = find +' AND soldTo ='.concat(`'${req.soldTo}'`) ;
            }
        }
            
        if(req.status !== ""){
            obj.orderstatus = req.status;
            if(!find){
                find = 'orderstatus ='.concat(`'${req.status}'`) ;
            }else{
                find = find + ' AND orderstatus ='.concat(`'${req.status}'`) ;
            }
        }
    
        if(req.orderType !== ""){
            obj.orderType = req.orderType;
            if(!find){
                find = 'orderType ='.concat(`'${req.orderType}'`) ;
            }else{
                find = find +' AND orderType ='.concat(`'${req.orderType}'`) ;
            }
        }
        
        if(req.fromDate !== ""){
                if(req.toDate !== ""){
                    if(!find){
                        find = 'orderDate BETWEEN '.concat(`'${req.fromDate}'`) .concat(' AND ').concat(`'${req.toDate}'`) ;
                    }else{
                        find = find + ' AND orderDate BETWEEN '.concat(`'${req.fromDate}'`) .concat(' AND ').concat(`'${req.toDate}'`);
                    }
                    
                }else{
                    if(!find){
                        find = 'orderDate ='.concat(`'${req.fromDate}'`) ;
                    }else{
                        find = find +' AND orderDate ='.concat(`'${req.fromDate}'`) ;
                    }
                }
         }

    
        if(req.search && req.searchBy){
            let text = req.searchBy;
           if(text.toUpperCase() == 'ERPORDERNUMBER' ||text.toUpperCase() == 'PONUMBER'){
            if(!find){
                find = `${req.searchBy} = '${req.search}'` ;
            }else{
                find = find +  ` AND ${req.searchBy} = '${req.search}'`  ;
                 }
             }
          }
       

      let sortId ;
        if(req.sort.toUpperCase() == 'ORDERDATE' || req.sort.toUpperCase() == 'PONUMBER' || req.sort.toUpperCase() == 'ORDERTYPE' || req.sort.toUpperCase() == 'ORDERSTATUS' || req.sort.toUpperCase() == 'ERPORDERNUMBER'){
                sortId = `${req.sort}`;
        }else {
            sortId = 'orderDate';
            sortDir = 'desc';
        }
      

        let orders =   await SELECT.from(`DB_ORDERHISTORYHEADER` ).where(find).orderBy(`${sortId} ${req.dir}`);
        //   console.log(orders);
      
        let cp = orders.length / req.pageSize ;
        cp = Math.ceil(cp);
    
        const OP = { "Orders": orders,
            "totalResults":orders.length ,
                    "PageSize":`${req.pageSize}` ,
                    "currentPage": `${cp}`} 
        return OP ;

    })
   // console.log('Ended');
}

 // console.log('Start');

    //  const res = srv.entities;
    //  console.log(res) ;
    //  console.log(srv.model.definitions );

    

   // if(req.search !== ""){
        //    if(req.searchBy !== ""){
        //     let v = req.searchBy;
        //    `obj.${v} `= req.search;
        //    }
        // }



    // if(req.sort !== ""){
    //     sort1.req.sort = req.dir;
    // }
    // let sorted = `${req.sort}  ${req.dir}` ;
  

      
// if(req.toDate !== ''){
//     if(req.fromDate !== ''){
//         obj.orderDate = '>'+req.fromDate;
        
//     }
// }
// else if(req.fromDate !== "") {
//     obj.orderDate = req.fromDate;
//       }



// .orderBy(`${req.sort[0]} ${req.dir}`, `${req.sort[1]} ${req.dir}`);
//          console.log(orders.SELECT);

 // if(req.toDate){
        //         if(req.fromDate ){
        //             // obj.orderDate = `BETWEEN `;
        //             // obj.orderDate += `'${req.fromDate}'`;
        //             // obj.orderDate += ` AND `;
        //             // obj.orderDate += `'${req.toDate}'`;
                     
        //         }
        //     }
            // else if(req.fromDate !== "") {
            //     obj.orderDate = req.fromDate;
            //       }


              // console.log(orders.pageSize);
        //  console.log( req.pageSize);

        // orders.totalPages = orders.length/ orders.pageSize ;
        // orders.totalResults =orders.length;
        // let  Oreq = cds.db.run(orders);
       
        // orders.currentPage = 


          // let last = {"totalResults":orders.length ,
        //             "PageSize":`${req.pageSize}` ,
        //             "currentPage": `${cp}`
        //  };
        //   let len = orders.length;
        //   orders[len] = last ;