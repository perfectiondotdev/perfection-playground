import { oversiteHelpers } from '$lib/OversiteHelpers.js';

//Perfection Helpers
export function load() {
	oversiteHelpers.init('homepage');
	const helpers = oversiteHelpers.instances.get('homepage');
	//Get Section
	const section = oversiteHelpers.section.parts(helpers?.section.parts, 'gridSection');
	const section_outer = section('outer', '');
	const section_inner = section('inner', 'ui-section');

	//Get Components
	const component1 = helpers?.component.parts('gridCard', 'card1');
	const component2 = helpers?.component.parts('gridCard', 'card2');
	const component3 = helpers?.component.parts('gridCard', 'card3');
	const component4 = helpers?.component.parts('gridCard', 'card4');
	const component5 = helpers?.component.parts('gridCard', 'card5');
	const component6 = helpers?.component.parts('gridCard', 'card6');
	const components = [
		component1('self', 'bg-dark'),
		component2('self', 'bg-dark'),
		component3('self', 'bg-dark'),
		component4('self', 'bg-dark'),
		component5('self', 'bg-dark'),
		component6('self', 'bg-dark')
	];
	return { section_outer, section_inner, components };
}
