const tableSearchFields = {
    columnWidths: {
        award_id: 160,
        recipient_name: 310,
        period_of_performance_start_date: 150,
        period_of_performance_current_end_date: 150,
        total_obligation: 220,
        funding_agency_name: 280,
        funding_subtier_name: 280,
        type: 230,
        description: 280,
        date_signed: 180,
        potential_total_value_of_award: 280,
        awarding_agency_name: 180,
        awarding_subtier_name: 280,
        awarding_office_name: 280,
        funding_office_name: 180,
        recipient_street: 180,
        recipient_country: 180,
        recipient_state_province: 180,
        recipient_county: 180,
        recipient_city: 180,
        recipient_zip_postal: 180,
        pop_city: 280,
        pop_zip: 280,
        pop_country: 280,
        pop_state_province: 280,
        recipient_duns: 280,
        recipient_parent_duns: 280,
        type_of_contract_pricing: 280,
        recipient_congressional_district: 280,
        recipient_phone: 280,
        recipient_fax: 280,
        pop_congressional_district: 380,
        pop_county: 280,
        contract_parent_id: 180,
        contract_idv_type: 180,
        contract_idc_type: 180,
        contract_idv_agency_id: 280,
        contract_multiple_idv: 180,
        contract_solicitation_id: 180,
        contract_solicitation_procedures: 180,
        contract_number_offers: 180,
        contract_extent_competed: 180,
        contract_set_aside_type: 180,
        contract_commercial_acquisition_procedures: 180,
        contract_commercial_test_program: 180,
        contract_evaluated_preference: 180,
        contract_fed_biz_opps: 180,
        contract_small_business_competitiveness_demo: 180,
        contract_psc_code: 180,
        contract_naics_code: 180,
        contract_naics_description: 180,
        contract_dod_claimant_code: 180,
        contract_program_system_or_equipment_code: 180,
        contract_it_commercial_category: 180,
        contract_sea_transport: 180,
        contract_clinger_cohen_act: 180,
        contract_davis_bacon_act: 180,
        contract_service_contract_act: 180,
        contract_walsh_healey_act: 180,
        contract_consolidated: 180,
        contract_cost_or_pricing_data: 180,
        contract_domestic_or_foreign: 180,
        contract_fair_opportunity_limited_sources: 180,
        contract_foreign_funding: 180,
        contract_interagency_contacting_authority: 180,
        contract_major_program: 180,
        contract_multi_year_contract: 180,
        contract_price_evaluation_adjustment_preference: 180,
        contract_program_acronym: 180,
        contract_purchase_card_as_payment_method: 180,
        contract_subcontracting_plan: 180
    },
    defaultSortDirection: {
        award_id: 'asc',
        recipient_name: 'asc',
        period_of_performance_start_date: 'desc',
        period_of_performance_current_end_date: 'desc',
        total_obligation: 'desc',
        funding_agency_name: 'asc',
        funding_subtier_name: 'asc',
        type: 'asc',
        description: 'asc',
        date_signed: 'asc',
        potential_total_value_of_award: 'asc',
        awarding_agency_name: 'asc',
        awarding_subtier_name: 'asc',
        awarding_office_name: 'asc',
        funding_office_name: 'asc',
        recipient_street: 'asc',
        recipient_country: 'asc',
        recipient_state_province: 'asc',
        recipient_county: 'asc',
        recipient_city: 'asc',
        recipient_zip_postal: 'asc',
        pop_city: 'asc',
        pop_zip: 'asc',
        pop_country: 'asc',
        pop_state_province: 'asc',
        recipient_duns: 'asc',
        recipient_parent_duns: 'asc',
        type_of_contract_pricing: 'asc',
        recipient_congressional_district: 'asc',
        recipient_phone: 'asc',
        recipient_fax: 'asc',
        pop_congressional_district: 'asc',
        pop_county: 'asc',
        contract_parent_id: 'asc',
        contract_idv_type: 'asc',
        contract_idc_type: 'asc',
        contract_idv_agency_id: 'asc',
        contract_multiple_idv: 'asc',
        contract_solicitation_id: 'asc',
        contract_solicitation_procedures: 'asc',
        contract_number_offers: 'asc',
        contract_extent_competed: 'asc',
        contract_set_aside_type: 'asc',
        contract_commercial_acquisition_procedures: 'asc',
        contract_commercial_test_program: 'asc',
        contract_evaluated_preference: 'asc',
        contract_fed_biz_opps: 'asc',
        contract_small_business_competitiveness_demo: 'asc',
        contract_psc_code: 'asc',
        contract_naics_code: 'asc',
        contract_naics_description: 'asc',
        contract_dod_claimant_code: 'asc',
        contract_program_system_or_equipment_code: 'asc',
        contract_it_commercial_category: 'asc',
        contract_sea_transport: 'asc',
        contract_clinger_cohen_act: 'asc',
        contract_davis_bacon_act: 'asc',
        contract_service_contract_act: 'asc',
        contract_walsh_healey_act: 'asc',
        contract_consolidated: 'asc',
        contract_cost_or_pricing_data: 'asc',
        contract_domestic_or_foreign: 'asc',
        contract_fair_opportunity_limited_sources: 'asc',
        contract_foreign_funding: 'asc',
        contract_interagency_contacting_authority: 'asc',
        contract_major_program: 'asc',
        contract_multi_year_contract: 'asc',
        contract_price_evaluation_adjustment_preference: 'asc',
        contract_program_acronym: 'asc',
        contract_purchase_card_as_payment_method: 'asc',
        contract_subcontracting_plan: 'asc'
    },
    contracts: {
        _defaultSortField: 'total_obligation',
        _requestFields: [
            'id',
            'fain',
            'uri',
            'piid',
            'recipient',
            'period_of_performance_start_date',
            'period_of_performance_current_end_date',
            'total_obligation',
            'funding_agency',
            'type_description',
            'description',
            'date_signed',
            'potential_total_value_of_award',
            'awarding_agency',
            'place_of_performance',
            'latest_transaction'
        ],
        _mapping: {
            award_id: 'piid',
            recipient_name: 'recipient__recipient_name',
            period_of_performance_start_date: 'period_of_performance_start_date',
            period_of_performance_current_end_date: 'period_of_performance_current_end_date',
            total_obligation: 'total_obligation',
            funding_agency_name: 'funding_agency__toptier_agency__name',
            funding_subtier_name: 'funding_agency__subtier_agency__name',
            type: 'type_description',
            description: 'description',
            date_signed: 'date_signed',
            potential_total_value_of_award: 'potential_total_value_of_award',
            awarding_agency_name: 'awarding_agency__toptier_agency__name',
            awarding_subtier_name: 'awarding_agency__subtier_agency__name',
            awarding_office_name: 'awarding_agency__office_agency__name',
            funding_office_name: 'funding_agency__office_agency__name',
            recipient_street: 'recipient__location__address_line1',
            recipient_country: 'recipient__location__country_name',
            recipient_state_province: 'recipient__location__state_code',
            recipient_county: 'recipient__location__county_name',
            recipient_city: 'recipient__location__city_name',
            recipient_zip_postal: 'recipient__location__zip5',
            pop_city: 'place_of_performance__city_name',
            pop_zip: 'place_of_performance__zip5',
            pop_country: 'place_of_performance__country_name',
            pop_state_province: 'place_of_performance__state_name',
            recipient_duns: 'recipient__recipient_unique_id',
            recipient_parent_duns: 'recipient__parent_recipient_unique_id',
            type_of_contract_pricing: 'latest_transaction__contract_data__type_of_contract_pricing',
            recipient_congressional_district: 'recipient__location__congressional_code',
            recipient_phone: 'recipient__vendor_phone_number',
            recipient_fax: 'recipient__vendor_fax_number',
            pop_congressional_district: 'place_of_performance__congressional_code',
            pop_county: 'place_of_performance__county_name',
            contract_parent_id: 'latest_transaction__contract_data__parent_award_id',
            contract_idv_type: 'latest_transaction__contract_data__idv_type',
            contract_idc_type: 'latest_transaction__contract_data__type_of_idc',
            contract_idv_agency_id: 'latest_transaction__contract_data__referenced_idv_agency_identifier',
            contract_multiple_idv: 'latest_transaction__contract_data__multiple_or_single_award_idv',
            contract_solicitation_id: 'latest_transaction__contract_data__solicitation_identifier',
            contract_solicitation_procedures: 'latest_transaction__contract_data__solicitation_procedures',
            contract_number_offers: 'latest_transaction__contract_data__number_of_offers_received',
            contract_extent_competed: 'latest_transaction__contract_data__extent_competed',
            contract_set_aside_type: 'latest_transaction__contract_data__type_set_aside',
            contract_commercial_acquisition_procedures: 'latest_transaction__contract_data__commercial_item_acquisition_procedures',
            contract_commercial_test_program: 'latest_transaction__contract_data__commercial_item_test_program',
            contract_evaluated_preference: 'latest_transaction__contract_data__evaluated_preference',
            contract_fed_biz_opps: 'latest_transaction__contract_data__fed_biz_opps',
            contract_small_business_competitiveness_demo: 'latest_transaction__contract_data__small_business_competitiveness_demonstration_program',
            contract_psc_code: 'latest_transaction__contract_data__product_or_service_code',
            contract_naics_code: 'latest_transaction__contract_data__naics',
            contract_naics_description: 'latest_transaction__contract_data__naics_description',
            contract_dod_claimant_code: 'latest_transaction__contract_data__dod_claimant_program_code',
            contract_program_system_or_equipment_code: 'latest_transaction__contract_data__program_system_or_equipment_code',
            contract_it_commercial_category: 'latest_transaction__contract_data__information_technology_commercial_item_category',
            contract_sea_transport: 'latest_transaction__contract_data__sea_transportation',
            contract_clinger_cohen_act: 'latest_transaction__contract_data__clinger_cohen_act_planning',
            contract_davis_bacon_act: 'latest_transaction__contract_data__davis_bacon_act',
            contract_service_contract_act: 'latest_transaction__contract_data__service_contract_act',
            contract_walsh_healey_act: 'latest_transaction__contract_data__walsh_healey_act',
            contract_consolidated: 'latest_transaction__contract_data__consolidated_contract',
            contract_cost_or_pricing_data: 'latest_transaction__contract_data__cost_or_pricing_data',
            contract_domestic_or_foreign: 'latest_transaction__contract_data__domestic_or_foreign_entity',
            contract_fair_opportunity_limited_sources: 'latest_transaction__contract_data__fair_opportunity_limited_sources',
            contract_foreign_funding: 'latest_transaction__contract_data__foreign_funding',
            contract_interagency_contacting_authority: 'latest_transaction__contract_data__interagency_contracting_authority',
            contract_major_program: 'latest_transaction__contract_data__major_program',
            contract_multi_year_contract: 'latest_transaction__contract_data__multi_year_contract',
            contract_price_evaluation_adjustment_preference: 'latest_transaction__contract_data__price_evaluation_adjustment_preference_percent_difference',
            contract_program_acronym: 'latest_transaction__contract_data__program_acronym',
            contract_purchase_card_as_payment_method: 'latest_transaction__contract_data__purchase_card_as_payment_method',
            contract_subcontracting_plan: 'latest_transaction__contract_data__subcontracting_plan'
        },
        award_id: 'Award ID',
        recipient_name: 'Recipient Name',
        period_of_performance_start_date: 'Start Date',
        period_of_performance_current_end_date: 'End Date',
        total_obligation: 'Award Amount',
        funding_agency_name: 'Funding Agency',
        funding_subtier_name: 'Funding Sub Agency',
        type: 'Contract Award Type',
        description: 'Contract Description',
        date_signed: 'Signed Date',
        potential_total_value_of_award: 'Potential Award Amount',
        awarding_agency_name: 'Awarding Agency',
        awarding_subtier_name: 'Awarding Sub Agency',
        awarding_office_name: 'Awarding Office',
        funding_office_name: 'Funding Office',
        recipient_street: 'Recipient Street',
        recipient_country: 'Recipient Country',
        recipient_state_province: 'Recipient State',
        recipient_county: 'Recipient County',
        recipient_city: 'Recipient City',
        recipient_zip_postal: 'Recipient Zip Code',
        pop_city: 'Place of Performance City',
        pop_zip: 'Place of Performance Zip Code',
        pop_country: 'Place of Performance Country',
        pop_state_province: 'Place of Performance State',
        recipient_duns: 'Recipient DUNS Number',
        recipient_parent_duns: 'Recipient Ultimate DUNS Number',
        type_of_contract_pricing: 'Contract Pricing Type',
        recipient_congressional_district: 'Recipient Congressional District',
        recipient_phone: 'Recipient Phone Number',
        recipient_fax: 'Recipient Fax Number',
        pop_congressional_district: 'Place of Performance Congressional District',
        pop_county: 'Place of Performance County',
        contract_parent_id: 'Parent Award ID',
        contract_idv_type: 'IDV Type',
        contract_idc_type: 'IDC Type',
        contract_idv_agency_id: 'IDV Agency Identifier',
        contract_multiple_idv: 'Multiple or Single Award IDV',
        contract_solicitation_id: 'Solicitation ID',
        contract_solicitation_procedures: 'Solicitation Procedures',
        contract_number_offers: 'Number of Offers Received',
        contract_extent_competed: 'Extent Competed',
        contract_set_aside_type: 'Set-Aside Type',
        contract_commercial_acquisition_procedures: 'Commercial Item Acquisition Procedures',
        contract_commercial_test_program: 'Commercial Item Test Program',
        contract_evaluated_preference: 'Evaluated Preference',
        contract_fed_biz_opps: 'FedBizOpps',
        contract_small_business_competitiveness_demo: 'Small Business Competitiveness Demonstration Program',
        contract_psc_code: 'PSC Code',
        contract_naics_code: 'NAICS Code',
        contract_naics_description: 'NAICS Description',
        contract_dod_claimant_code: 'DoD Claimant Program Code',
        contract_program_system_or_equipment_code: 'Program, System, or Equipment Code',
        contract_it_commercial_category: 'Information Technology Commercial Item Category',
        contract_sea_transport: 'Sea Transportation',
        contract_clinger_cohen_act: 'Clinger-Cohen Act Compliant',
        contract_davis_bacon_act: 'Subject To Davis Bacon Act',
        contract_service_contract_act: 'Subject To Service Contract Act',
        contract_walsh_healey_act: 'Subject To Walsh Healey Act',
        contract_consolidated: 'Consolidated Contract',
        contract_cost_or_pricing_data: 'Cost or Pricing Data',
        contract_domestic_or_foreign: 'Domestic or Foreign Entity',
        contract_fair_opportunity_limited_sources: 'Fair Opportunity Limited Sources',
        contract_foreign_funding: 'Foreign Funding',
        contract_interagency_contacting_authority: 'Interagency Contracting Authority',
        contract_major_program: 'Major program',
        contract_multi_year_contract: 'Multi Year Contract',
        contract_price_evaluation_adjustment_preference: 'Price Evaluation Adjustment Preference Percent Difference',
        contract_program_acronym: 'Program Acronym',
        contract_purchase_card_as_payment_method: 'Purchase Card as Payment Method',
        contract_subcontracting_plan: 'Subcontracting Plan'
    },
    grants: {
        _defaultSortField: 'total_obligation',
        _order: [
            'award_id',
            'recipient_name',
            'period_of_performance_start_date',
            'period_of_performance_current_end_date',
            'total_obligation',
            'funding_agency_name',
            'funding_subtier_name',
            'type'
        ],
        _requestFields: [
            'id',
            'piid',
            'fain',
            'uri',
            'recipient',
            'period_of_performance_start_date',
            'period_of_performance_current_end_date',
            'total_obligation',
            'type_description',
            'funding_agency'
        ],
        _mapping: {
            award_id: 'fain',
            recipient_name: 'recipient__recipient_name',
            period_of_performance_start_date: 'period_of_performance_start_date',
            period_of_performance_current_end_date: 'period_of_performance_current_end_date',
            total_obligation: 'total_obligation',
            type: 'type',
            funding_agency_name: 'funding_agency__toptier_agency__name',
            funding_subtier_name: 'funding_agency__subtier_agency__name'
        },
        award_id: 'Award ID',
        recipient_name: 'Recipient Name',
        period_of_performance_start_date: 'Start Date',
        period_of_performance_current_end_date: 'End Date',
        total_obligation: 'Award Amount',
        funding_agency_name: 'Funding Agency',
        funding_subtier_name: 'Funding Sub Agency'
    },
    direct_payments: {
        _defaultSortField: 'total_obligation',
        _order: [
            'award_id',
            'recipient_name',
            'period_of_performance_start_date',
            'period_of_performance_current_end_date',
            'total_obligation',
            'funding_agency_name',
            'funding_subtier_name',
            'type'
        ],
        _requestFields: [
            'id',
            'piid',
            'fain',
            'uri',
            'recipient',
            'period_of_performance_start_date',
            'period_of_performance_current_end_date',
            'total_obligation',
            'type_description',
            'funding_agency'
        ],
        _mapping: {
            award_id: 'fain',
            recipient_name: 'recipient__recipient_name',
            period_of_performance_start_date: 'period_of_performance_start_date',
            period_of_performance_current_end_date: 'period_of_performance_current_end_date',
            total_obligation: 'total_obligation',
            type: 'type',
            funding_agency_name: 'funding_agency__toptier_agency__name',
            funding_subtier_name: 'funding_agency__subtier_agency__name'
        },
        award_id: 'Award ID',
        recipient_name: 'Recipient Name',
        period_of_performance_start_date: 'Start Date',
        period_of_performance_current_end_date: 'End Date',
        total_obligation: 'Award Amount',
        type: 'Award Type',
        funding_agency_name: 'Funding Agency',
        funding_subtier_name: 'Funding Sub-Agency'
    },
    loans: {
        columnWidths: {
            award_id: 160,
            recipient_name: 310,
            action_date: 150,
            face_value_loan_guarantee: 220,
            original_loan_subsidy_cost: 230,
            funding_agency_name: 280,
            funding_subtier_name: 280
        },
        _defaultSortField: 'face_value_loan_guarantee',
        sortDirection: {
            award_id: 'asc',
            recipient_name: 'asc',
            action_date: 'desc',
            face_value_loan_guarantee: 'desc',
            original_loan_subsidy_cost: 'desc',
            funding_agency_name: 'asc',
            funding_subtier_name: 'asc'
        },
        _order: [
            'award_id',
            'recipient_name',
            'action_date',
            'face_value_loan_guarantee',
            'original_loan_subsidy_cost',
            'funding_agency_name',
            'funding_subtier_name'
        ],
        _requestFields: [
            'id',
            'piid',
            'fain',
            'uri',
            'recipient',
            'action_date',
            'latest_transaction',
            'funding_agency'
        ],
        _mapping: {
            award_id: 'fain',
            recipient_name: 'recipient__recipient_name',
            action_date: 'latest_transaction__action_date',
            face_value_loan_guarantee: 'latest_transaction__assistance_data__face_value_loan_guarantee',
            original_loan_subsidy_cost: 'latest_transaction__assistance_data__original_loan_subsidy_cost',
            funding_agency_name: 'funding_agency__toptier_agency__name',
            funding_subtier_name: 'funding_agency__subtier_agency__name'
        },
        award_id: 'Award ID',
        recipient_name: 'Recipient Name',
        action_date: 'Issued Date',
        face_value_loan_guarantee: 'Loan Value',
        original_loan_subsidy_cost: 'Subsidy Cost',
        funding_agency_name: 'Funding Agency',
        funding_subtier_name: 'Funding Sub-Agency'
    },
    insurance: {
        _defaultSortField: 'total_obligation',
        _order: [
            'award_id',
            'recipient_name',
            'period_of_performance_start_date',
            'period_of_performance_current_end_date',
            'total_obligation',
            'funding_agency_name',
            'funding_subtier_name',
            'type'
        ],
        _requestFields: [
            'id',
            'piid',
            'fain',
            'uri',
            'recipient',
            'period_of_performance_start_date',
            'period_of_performance_current_end_date',
            'total_obligation',
            'type_description',
            'funding_agency'
        ],
        _mapping: {
            award_id: 'fain',
            recipient_name: 'recipient__recipient_name',
            period_of_performance_start_date: 'period_of_performance_start_date',
            period_of_performance_current_end_date: 'period_of_performance_current_end_date',
            total_obligation: 'total_obligation',
            type: 'type',
            funding_agency_name: 'funding_agency__toptier_agency__name',
            funding_subtier_name: 'funding_agency__subtier_agency__name'
        },
        award_id: 'Award ID',
        recipient_name: 'Recipient Name',
        period_of_performance_start_date: 'Start Date',
        period_of_performance_current_end_date: 'End Date',
        total_obligation: 'Award Amount',
        type: 'Award Type',
        funding_agency_name: 'Funding Agency',
        funding_subtier_name: 'Funding Sub-Agency'
    }
};

export default tableSearchFields;
