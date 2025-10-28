namespace db;
 

entity OrderHistoryHeader {
        @mandatory
    key soldTo            : String(255); //Customer sold-to
          @mandatory
        shipTo            : String(255); // Customer ship-to number (shipping address)
 
           @mandatory
        poNumber          : String; // Order reference 1
 
         @mandatory
        paymentTerms      : String; // Descriptive payment term
 
           @mandatory
        orderType         : String; // Order type
 
          @mandatory
        orderPlacedBy     : String; // Initial of order taker
         @mandatory
        totalPrice        : Integer; // Total order price
 
          @mandatory
        currency          : String; // currency assigned to dealer
 
       @mandatory
        erpOrderNumber    : String; // EP1/ERP order number
 
           @mandatory
        erpOrderType      : String; // JDE Order Type *Available only for SNAH
 
          @mandatory
        orderStatus       : Integer; //  1 Order info status, refer below table
 
          @mandatory
        hybrisOrderNumber : String(255); // 255 Hybris order number This is Order.code from GB2B
 
          @mandatory
        orderDate         : Timestamp default '0000-00-00 00:00:00'; // Date of the order ISO 8601 Format=yyyy-MM-dd''T''HH:mm:ss.SSSXX
 
//   @mandatory
//  currentPage       : Integer  default 1 ; // Page Number of the current page
 
//   pageSize          : Integer default 12;                // Page size
 
//   @mandatory
// totalPages        : Integer     ; // Number of pages based on page siz
 
//   @mandatory
//   totalResults      : Integer    ; // Total Number of results
}
 




//  -------------------------------------------------------------------------------------

 
// entity OrderSearch {
//   key  dummy        :Integer;
//     soldTo      :      String(255) @mandatory; //Customer sold-to
//     search      :      String;     // Search Value
//     searchBy    :      String;    // list of fields on which user can search by: orderNumber, invoiceNumber, poNumber, ItemNumber
//     fromDate    :      String;    //Date order entered from
//     toDate      :      String;    //Date order entered until
//     status      : many String;    //  Order info status list (1 - Open, 2 - Closed, 3 - Back Order) comma separated order status identifiers
//     orderType   : many String;
//      @mandatory                                             //  Order Types
//     sort        : many String         ; //
 
//      @mandatory
//     dir         :      String      default  'desc';
 
//      @mandatory              // SortDirection Sort direction
//     currentPage :      Integer     default 1;
 
//      @mandatory                  // Page Number of the current page for Pagination while search
//     pageSize    :      Integer      default 12;                  // Used for pagination while search
// }
 