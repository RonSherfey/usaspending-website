/**
 * additionalDetailsFinancialAssistance.js
 * Created by Jonathan Hill 09/19/19
 */

import { isAwardAggregate, getSubmittingAgencyId } from 'helpers/awardSummaryHelper';
import { AGENCY_LINK } from 'GlobalConstants';

const getUriOrFain = ({
    generatedId,
    uri,
    fain
}) => {
    if (isAwardAggregate(generatedId)) {
        return {
            // aggregate  awards are identified by their "Unique Record Identifier"
            'Unique Record Identifier (URI)': uri
        };
    }
    // non aggregate awards are identified by their "FAIN"
    return {
        'Federal Award Identification Number (FAIN)': fain
    };
};

const additionalDetailsFinancialAssistance = (awardData) => {
    const {
        awardingAgency,
        fundingAgency,
        periodOfPerformance,
        placeOfPerformance,
        recipient
    } = awardData;
    const data = {
        uniqueAwardKey: {
            'Unique Award Key': awardData.generatedId,
            'Record Type': isAwardAggregate(awardData.generatedId)
                ? 'Financial Assistance, Aggregated'
                : 'Financial Assistance, Non-Aggregated',
            ...getUriOrFain(awardData),
            'Awarding Sub-Agency Code': getSubmittingAgencyId(awardData.generatedId)
        },
        agencyDetails: {
            'Awarding Agency': {
                type: 'link',
                data: {
                    path: (awardingAgency.agencySlug && awardingAgency.hasAgencyPage) ? `/${AGENCY_LINK}/${awardingAgency.agencySlug}` : null,
                    title: awardingAgency.formattedToptier
                }
            },
            'Awarding Sub-Agency': {
                type: 'link',
                data: {
                    path: awardingAgency.subtierId ? `/agency/${awardingAgency.subtierId}` : null,
                    title: awardingAgency.subtierName
                }
            },
            'Awarding Office': {
                type: 'link',
                data: {
                    path: awardingAgency.officeId ? `/agency/${awardingAgency.officeId}` : null,
                    title: awardingAgency.officeName
                }
            },
            'Funding Agency': {
                type: 'link',
                data: {
                    path: (fundingAgency.agencySlug && fundingAgency.hasAgencyPage) ? `/${AGENCY_LINK}/${fundingAgency.agencySlug}` : null,
                    title: fundingAgency.formattedToptier
                }
            },
            'Funding Sub-Agency': {
                type: 'link',
                data: {
                    path: fundingAgency.subtierId ? `/agency/${fundingAgency.subtierId}` : null,
                    title: fundingAgency.subtierName
                }
            },
            'Funding Office': {
                type: 'link',
                data: {
                    path: fundingAgency.officeId ? `/agency/${fundingAgency.officeId}` : null,
                    title: fundingAgency.officeName
                }
            }
        },
        placeOfPerformance: {
            Address: {
                type: 'address',
                data: [
                    `${placeOfPerformance.regionalAddress}`,
                    `${placeOfPerformance.fullCongressionalDistrict}`,
                    `${placeOfPerformance._country}`
                ]
            }
        },
        periodOfPerformance: {
            'Start Date': periodOfPerformance.startDate,
            'End Date': periodOfPerformance.endDate
        },
        recipientDetails: {
            Recipient: {
                type: 'link',
                data: {
                    path: recipient.internalId ? `/recipient/${recipient.internalId}/latest` : null,
                    title: recipient._name
                }
            },
            DUNS: recipient.duns || '',
            'Parent Recipient': {
                type: 'link',
                data: {
                    path: recipient.parentInternalId ?
                        `/recipient/${recipient.parentInternalId}/latest` : null,
                    title: recipient.parentName
                }
            },
            'Parent DUNS': recipient.parentDuns || '',
            'Recipient Address': {
                type: 'address',
                data: [
                    `${recipient.location.streetAddress}`,
                    `${recipient.location.regionalAddress}`,
                    `${recipient.location.fullCongressionalDistrict}`,
                    `${recipient.location._country}`
                ]
            },
            'Business Types': {
                type: 'list',
                data: recipient.businessCategories || []
            }
        }
    };

    return data;
};

export default additionalDetailsFinancialAssistance;
