describe('User Registration', () => {
    it('Should allow a new player to register with full details', () => {
        // Step 1: Navigate to register page
        cy.visit('https://moneygaming.qa.gameaccount.com/');
        cy.get('a[href="/sign-up.shtml"]').click();
        
        // Adding a small wait time (consider using cy.wait() only for debugging purposes)
        cy.wait(1000);
        
         // Step 3: Select a title value from the dropdown
         const title = 'Mr'; // Hardcoded title value
         const firstName = 'Jimmy'; // Hardcoded first name
         const lastName = 'Doe'; // Hardcoded last name
 
         cy.get('select[name="map(title)"]').should('be.visible').select(title).then(() => {
             cy.log('Title selected: ' + title); // Log the action
         });
 
         // Step 4: Enter First Name and Last Name
         cy.get('input[name="map(firstName)"]').type(firstName); // Type in the first name
         cy.get('input[name="map(lastName)"]').type(lastName); // Type in the last name

        // Step 5: Check the tickbox to accept Terms and Conditions
        cy.get('input[type="checkbox"]').check();

        // Step 6: Submit the form by clicking Join
        cy.get('input[type="submit"][value="Join Now!"]').should('be.visible').click();

        // Step 7: Validate that an error message appears for missing Date of Birth
        cy.get('label[for="dob"]').should('have.class', 'error').and('contain', 'This field is required');
    });
});