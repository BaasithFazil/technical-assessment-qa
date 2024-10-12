describe('Item Manager Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Visit the application
    });
  
    // Test Case TC-001: Add an Item
    it('should add a new item', () => {
      const itemName = 'Test Item';
      cy.get('input').type(itemName);
      cy.get('.App > :nth-child(3)').click();
      cy.contains(itemName).should('be.visible');
    });
  
    // Test Case TC-002: Add an Empty Item
    it('should not add any empty item', () => {
      cy.get('input').clear();
      cy.contains('Add Item').click();
      cy.get('li').should('have.length', 0)
    });
  
    // Test Case TC-003: View Items
    it('should display added items', () => {
      const itemName = 'Another Item';
      cy.get('input').type(itemName);
      cy.get('.App > :nth-child(3)').click();
      cy.get('ul').should('contain', itemName); 
      cy.get('li').should('have.length', 1) 
    });
  
    // Test Case TC-004: Delete Item
    it('should delete an item', () => {
      const itemName = 'Item to Delete';
      cy.get('input').type(itemName);
      cy.get('.App > :nth-child(3)').click();
      cy.contains(itemName).should('be.visible');
      cy.get('li > button').click();
      cy.contains(itemName).should('not.exist');
    });  
  });
  