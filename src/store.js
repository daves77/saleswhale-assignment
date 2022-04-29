import { useReducer, createContext } from 'react';

const data = {
	teams: [
		{
			id: 1,
			name: 'Axa',
			image:
				'https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/966/twitter/wataten-avatar.jpg?1546777130',
			description:
				'AXA is a French multinational insurance firm headquartered in the 8th random place and random time etc',
			campaigns_count: 20,
			leads_count: 1500,
			is_favorited: true,
			is_archived: false,
			created_at: '28 July 2018',
		},
		{
			id: 2,
			name: 'Indeed - US',
			image:
				'https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/970/twitter/shield-hero-avatar.jpg?1546779870',
			description:
				'Indeed is an American worldwide employment-related search engine for job stuff and other random stuff',
			campaigns_count: 15,
			leads_count: 7130,
			is_favorited: false,
			is_archived: false,
			created_at: '15 October 2018',
		},
		{
			id: 3,
			name: 'Indeed - EU',
			image:
				'https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/970/twitter/shield-hero-avatar.jpg?1546779870',
			description:
				'Indeed is an American worldwide employment-related search engine for job stuff and other random stuff',
			campaigns_count: 18,
			leads_count: 3500,
			is_favorited: false,
			is_archived: false,
			created_at: '1 October 2018',
		},
		{
			id: 4,
			name: 'Workday - US',
			image:
				'https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/908/twitter/tensura-avatar.png?1538236957',
			description:
				'Workday Inc is an on demand financial management and human capital management something とかなんとか',
			campaigns_count: 16,
			leads_count: 2000,
			is_favorited: false,
			is_archived: false,
			created_at: '2 October 2018',
		},
		{
			id: 5,
			name: 'Workday - AU',
			image:
				'https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/908/twitter/tensura-avatar.png?1538236957',
			description:
				'Workday Inc is an on demand financial management and human capital management something とかなんとか',
			campaigns_count: 12,
			leads_count: 1500,
			is_favorited: false,
			is_archived: false,
			created_at: '3 October 2018',
		},
		{
			id: 6,
			name: 'Time',
			image:
				'https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/979/twitter/5-hanayome-avatar.jpg?1547281143',
			description:
				'Time is an American weekly news magazine and new website published in New York and like a bunch of other places and stuff',
			campaigns_count: 13,
			leads_count: 10000,
			is_favorited: true,
			is_archived: false,
			created_at: '1 September 2018',
		},
		{
			id: 7,
			name: 'Zendesk',
			image:
				'https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/924/twitter/uzamaid-avatar.png?1538475352',
			description:
				'Zendesk Inc is a customer service software company headquartered in San Francisco and they do things I guess',
			campaigns_count: 17,
			leads_count: 1200,
			is_favorited: true,
			is_archived: false,
			created_at: '2 June 2018',
		},
		{
			id: 8,
			name: 'Uber',
			image:
				'https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/965/twitter/kemono-friends-2-avatar.jpg?1546501240',
			description:
				'Uber is a transportation network company headquartered in San Francisco, California. They drive people around I guess',
			campaigns_count: 10,
			leads_count: 3200,
			is_favorited: false,
			is_archived: true,
			created_at: '2 July 2018',
		},
		{
			id: 9,
			name: 'Grab',
			image:
				'https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/895/twitter/revue-starlight-a.png?1531195655',
			description:
				'GrabTaxi Holdings Pte Ltd is a Singapore-based technology company that offers rides and other stuff but mostly rides to people',
			campaigns_count: 23,
			leads_count: 2000,
			is_favorited: false,
			is_archived: true,
			created_at: '6 July 2018',
		},
	],
	activities: [
		{
			id: 1,
			person: {
				id: 1,
				name: 'Julie',
				avatar:
					'https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139',
			},
			action: 'increased_quota',
			target: 'Indeed - US',
			created_at: '2 hours ago',
		},
		{
			id: 2,
			person: {
				id: 2,
				name: 'Emily',
				avatar:
					'https://d1bb37ap2qun5z.cloudfront.net/sites/default_user_avatars/000/000/002/display/nicdesu.jpg?1394032656',
			},
			action: 'added_leads',
			target: 'Linkedin',
			created_at: '4 hours ago',
		},
		{
			id: 3,
			person: {
				id: 2,
				name: 'Emily',
				avatar:
					'https://d1bb37ap2qun5z.cloudfront.net/sites/default_user_avatars/000/000/002/display/nicdesu.jpg?1394032656',
			},
			action: 'archived_team',
			target: 'Uber',
			created_at: '2 hours ago',
		},
		{
			id: 4,
			person: {
				id: 1,
				name: 'Julie',
				avatar:
					'https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139',
			},
			action: 'archived_team',
			target: 'Grab',
			created_at: '6 hours ago',
		},
		{
			id: 5,
			person: {
				id: 1,
				name: 'Julie',
				avatar:
					'https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139',
			},
			action: 'added_leads',
			target: 'Workday - AU',
			created_at: '2 hours ago',
		},
	],
	current_user: {
		id: 4,
		name: 'John',
		avatar:
			'https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/001/display/shimakaze-desu.jpg?1396709040',
		notifications_count: 5,
	},
};

const initialState = {
	teams: data.teams,
	activities: data.activities,
	user: data.current_user,
};

const TOGGLE_FAVOURITE_TEAM = 'TOGGLE_FAVOURITE_TEAM';
const TOGGLE_ARCHIVE_TEAM = 'TOGGLE_ARCHIVE_TEAM';

const storeReducer = (state, action) => {
	const teams = JSON.parse(JSON.stringify(state.teams));
	switch (action.type) {
		case TOGGLE_FAVOURITE_TEAM:
			return {
				...state,
				teams: teams.map((team) =>
					team.id === action.payload.id ? action.payload : team
				),
			};
		case TOGGLE_ARCHIVE_TEAM:
			return {
				...state,
				teams: teams.map((team) =>
					team.id === action.payload.id ? action.payload : team
				),
			};
		default:
			return state;
	}
};

export const toggleFavoriteTeamAction = (team) => {
	return {
		type: TOGGLE_FAVOURITE_TEAM,
		payload: team,
	};
};

export const toggleArchiveTeamAction = (team) => {
	return {
		type: TOGGLE_ARCHIVE_TEAM,
		payload: team,
	};
};

export const Context = createContext({ store: initialState });
const { Provider } = Context;

export const StoreProvider = ({ children }) => {
	const [store, dispatch] = useReducer(storeReducer, initialState);
	return <Provider value={{ store, dispatch }}>{children}</Provider>;
};
