using { db } from '../db/Products';

service MyService {
    entity ProductsServise as projection on db.Products;
}