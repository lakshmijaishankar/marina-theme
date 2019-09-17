import { connect } from '@magento/venia-drivers';
import { transformItems } from '@magento/peregrine/lib/store/selectors/purchaseHistory';
import PurchaseHistory from './purchaseHistory';
import actions, {
    getPurchaseHistory
} from '@magento/peregrine/lib/store/actions/purchaseHistory';

const mapStateToProps = ({ purchaseHistory }) => {
    const { isFetching } = purchaseHistory;

    const items = transformItems(purchaseHistory.items);

    return {
        isFetching,
        items
    };
};

const mapDispatchToProps = {
    getPurchaseHistory,
    resetPurchaseHistory: actions.reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PurchaseHistory);