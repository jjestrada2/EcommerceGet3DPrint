const path=require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate= path.resolve(`src/templates/Product.js`)
  const result =await graphql(`
      query  GET_SKUS {
        allStripePrice(
                 filter: { active: { eq: true } }
                 sort: { fields: [unit_amount] }
               ) {
                 edges {
                   node {
                     id
                     active
                     currency
                     unit_amount
                     product {
                       id
                       name
                       metadata{
                         img
                         description
                       }
                       
                     }
                   }
                 }
               }
             }
       
     
    
  `);

  if(result.errors){
    throw result.errors
  }
result.data.allStripePrice.edges.forEach(({node})=>{
  createPage({
    path:`${node.id}`,
    component:productTemplate,
    context:node,
  });
});


}
