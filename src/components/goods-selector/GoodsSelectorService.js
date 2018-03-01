import './_goods-selector.scss';

import ModalService from '../modal/ModalService';
import bodyTemplate from './goods-seletor-body.tpl.html';
import GoodsSelectorController from './GoodsSelectorController';

const noop = () => {
};

/**
 * modal服务
 */
const GoodsSelectorService = {

	areaSelector(selectedGoods) {
		console.log(selectedGoods);
		return ModalService.modal(
			{
				title: '商品选择',
				style: {'width': '1016px', 'min-height': '420px'},
				fullscreen: false,
				hasFooter: true,
				__body: bodyTemplate,
				locals: {selectedData: selectedGoods},
				controller: GoodsSelectorController,
				controllerAs: '$ctrl',
				onClose: noop
			}
		);
	}
};

export default GoodsSelectorService;
