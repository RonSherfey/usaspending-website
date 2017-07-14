import AgencyOverviewModel from 'models/agency/AgencyOverviewModel';

export const mockApi = {
    results: {
        current_total_budget_authority_amount: 1000,
        website: 'https://www.google.com',
        mission: 'Mission text',
        obligated_amount: 15,
        outlay_amount: 12,
        budget_authority_amount: 30,
        agency_name: 'Department of Test',
        active_fy: '2017',
        active_fq: '2',
        icon_filename: 'test.png'
    }
};

export const mockRedux = {
    agency: {
        id: '123',
        overview: new AgencyOverviewModel({
            id: '123',
            name: 'Department of Test',
            mission: 'Mission text',
            website: 'https://www.google.com',
            logo: 'test.png',
            activeFY: '2017',
            activeFQ: '2',
            federalBudget: 1000,
            obligatedAmount: 15,
            budgetAuthority: 30
        })
    },
    params: {
        agencyId: '123'
    },
    resetAgency: jest.fn(),
    setAgencyOverview: jest.fn()
};
