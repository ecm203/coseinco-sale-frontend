export const types = {
    openLogin : '[ui] Open Login Modal',
    closeLogin : '[ui] Close Login Modal',
    openCartP: '[ui] Open Cart Preview',
    closeCartP: '[ui] Close Cart Preview',
    openSearchH: '[ui] Open SearchH',
    closeSearchH: '[ui] Close SearchH',
    activeLayout: '[ui] Active layout',
    inactiveLayout: '[ui] Inactive layout',
    isLogin: '[ui] User is loged',
    
    categoriesLoaded: '[layout] Get categories Layout', 
    infoLoaded: '[layout] Get Info Layout',
    searchProductLoaded: '[layout] Search product by name',

    bannersLoaded: '[home] Get Banners Home',
    noveltiesLoaded: '[home] Get Products Novelties Home',

    catalogCategoriesLoaded: '[catalog] Get Catalog by Categories',
    filterSizeLoaded: '[catalog] Get Size by Categories',
    filterColorLoaded: '[catalog] Get Color by Categories',

    productDetailLoaded: '[producto-detail] Get Product Detail by ID',
    productDetailInfoLoaded: '[producto-detail] Get Product Detail Info by ID',
    productsRelatedLoaded: '[producto-detail] Get Product Related  by ID',
    changeColorSelected: '[producto-detail] Change color selected',

    cartProductAdded: '[cart] Add prodcut to cart',
    cartProductLoaded: '[cart] Get List products by id',
    cartProductDeleted: '[cart] Delete product to cart',
    cartItemsNumberLoaded: '[cart] Get Number of items in cart',
    cartSubtotalLoaded: '[cart] Get Subtotal Cart',
    cartProductUpdated: '[cart] Update producto to cart',
    cartShipmentInserted: '[cart] Insert shipment method',
    orderLoaded: '[order] Order loaded'
}