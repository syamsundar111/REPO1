using {db} from '../db/OrderHistroyHeader';
  
service MyService {

     @cds.persistence.skip 
    entity results {
    //    @mandatory
        key soldTo      : String(255) ;
        search      : String;
        searchBy    : String;
        fromDate    : String;
        toDate      : String;
        status      :Integer;
        orderType   : String;

        @mandatory
        sort        : String; //

        @mandatory
        dir         : String default 'desc';

        @mandatory
        currentPage : Integer default 1;

        @mandatory
        pageSize    : Integer default 12;
    }

entity result as select from db.OrderHistoryHeader   ;
}
