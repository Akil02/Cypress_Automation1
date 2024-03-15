class OpenCartAdmin_ProductPage {
  Product_Add_in_db() {
    cy.xpath("//*[@class = 'pagination']//li").then((pagenum) => {
      let s_no = 1;
      for (let i = 0; i < 1; i++) {
        let p = pagenum.eq(i).text();
        cy.xpath("//tbody//tr").then((Row) => {
          let rowcount = Row.length;
          for (let k = 0; k < rowcount; k++) {
            let n1 = k + 1;
            let PN1 = "//tbody//tr[" + n1 + "]//td[3]";
            let PM = "//tbody//tr[" + n1 + "]//td[4]";
            let PC = "//tbody//tr[" + n1 + "]//td[5]";
            let Q = "//tbody//tr[" + n1 + "]//td[6]";
            var P_name1 = "";
            var P_model = "";
            var Price = "";
            var Qual = "";
            cy.xpath(PN1).then((txt1) => {
              P_name1 = txt1.text();
              cy.wrap(P_name1).as("P_name1");
            });
            cy.xpath(PM).then((model1) => {
              P_model = model1.text();
              cy.wrap(P_model).as("P_model1");
            });
            cy.xpath(PC).then((Price1) => {
              Price = Price1.text();
              cy.wrap(Price).as("Price2");
            });
            cy.xpath(Q).then((Qual1) => {
              Qual = Qual1.text();
              cy.wrap(Qual).as("Qual2");
            });
            cy.get("@P_name1").then((P_name1) => {
              cy.get("@P_model1").then((P_model1) => {
                cy.get("@Price2").then((Price2) => {
                  cy.get("@Qual2").then((Qual2) => {
                    cy.log(
                      "The name is : " +
                        P_name1 +
                        " and : " +
                        P_model1 +
                        " ," +
                        Price2 +
                        " ," +
                        Qual2
                    );
                  });
                });
              });
            });
          }
        });
      }
    });
    // for all other pages
    let a = 2;
    cy.log("---------------------------------------------------------------");
    cy.xpath("//*[@class = 'pagination']//li//a").then((pagenum1) => {
      cy.log("The length is : " + pagenum1.length);
      for (let i = 0; i < pagenum1.length; i++) {
        let name1 = pagenum1.eq(i).text();
        cy.log("the name of name is : " + name1 + " and a is : " + a);
        if (name1 == a) {
          pagenum1.eq(i).click();
          cy.wait(2000);
          cy.xpath("//tbody//tr").then((Row1) => {
            let rowcount1 = Row1.length;
            for (let k = 0; k < rowcount1; k++) {
              let n1 = k + 1;
              let PN1 = "//tbody//tr[" + n1 + "]//td[3]";
              let PM = "//tbody//tr[" + n1 + "]//td[4]";
              let PC = "//tbody//tr[" + n1 + "]//td[5]";
              let Q = "//tbody//tr[" + n1 + "]//td[6]";
              var P_name1 = "";
              var P_model = "";
              var Price = "";
              var Qual = "";
              cy.xpath(PN1).then((txt1) => {
                P_name1 = txt1.text();
                cy.wrap(P_name1).as("P_name1");
              });
              cy.xpath(PM).then((model1) => {
                P_model = model1.text();
                cy.wrap(P_model).as("P_model1");
              });
              cy.xpath(PC).then((Price1) => {
                Price = Price1.text();
                cy.wrap(Price).as("Price2");
              });
              cy.xpath(Q).then((Qual1) => {
                Qual = Qual1.text();
                cy.wrap(Qual).as("Qual2");
              });
              cy.get("@P_name1").then((P_name1) => {
                cy.get("@P_model1").then((P_model1) => {
                  cy.get("@Price2").then((Price2) => {
                    cy.get("@Qual2").then((Qual2) => {
                      cy.log(
                        "The name is : " +
                          P_name1 +
                          " and : " +
                          P_model1 +
                          " ," +
                          Price2 +
                          " ," +
                          Qual2
                      );
                    });
                  });
                });
              });
            }
          });
          ++a;
        } else {
          break;
        }
      }
    });
    /*   try {
      cy.task(
        "queryDb",
        "INSERT INTO All_Products VALUES ('1','Akil2','Ganesh','2555','$32')"
      );
    } catch (error) {
      cy.log("The error message == : " + error);
    }
    cy.log("Conncted database");  */
  }
}
export default OpenCartAdmin_ProductPage;
