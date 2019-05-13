//This file is served up for the account pages, Either create or update account
const stateDropDownOption = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC',
 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD',
 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP',
 'OH', 'OK','OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA',
 'WA', 'WV', 'WI', 'WY' ];
// jQuery document ready
$(()=> {

    stateDropDownOption.forEach(state => {
        $(".state-options").append("<option>" + state + "</option>");
    });

    //Form submission code can be relocated here. to have it served only on the create/update 

});