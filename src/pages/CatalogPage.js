import Breadcrumbs from "../components/Breadcrumbs";
import CatalogContainer from '../components/catalog/CatalogContainer';

function CatalogPage() {
   

    return (
        <>
            <Breadcrumbs title="Каталог" />
            <CatalogContainer/>
        </>
    );
}

export default CatalogPage;