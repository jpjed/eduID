/**
 * Track the trade of a commodity from one trader to another
 * @param {org.acme.model.UpdateIdentityByHighSchool} tx - transaction
 * @transaction
 */
function updateGPAByHighSchool(tx) {
    tx.identity.gpa = tx.studentGpa; 
    return getAssetRegistry('org.acme.model.StudentIdentity')
        .then(function (assetRegistry) {
            return assetRegistry.update(tx.identity);
        });
}


/**
 * Track the trade of a commodity from one trader to another
 * @param {org.acme.model.UpdateIdentityByUniversity} tx - transaction
 * @transaction
 */
function updateDecisionByUniversity(tx) {
    tx.identity.decision = tx.decision; 
    return getAssetRegistry('org.acme.model.StudentIdentity')
        .then(function (assetRegistry) {
            return assetRegistry.update(tx.identity);
        });
}
