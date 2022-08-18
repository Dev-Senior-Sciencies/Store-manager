const { expect } = require("chai");
const sinon = require("sinon");
const productsServices = require("../../../services/productService");
const productsController = require("../../../controllers/productsController");


describe("Test List GetsProducts 'Controllers'", () => {
  describe("List or Products Controllers", () => {
    const prod = [
        { id: 1, name: "Martelo de Thor" },
        { id: 2, name: "Traje de encolhimento" },
        { id: 3, name: "Escudo do Capitão América" }
    ];
    const req = {};
    const res = {};
    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsServices, 'getAllProductsServices').resolves(prod)
     
    });

    after(async () => {
      productsServices.getAllProductsServices.restore();
    });

    it("Method Is certificate status code 200 return", async () => {
      await productsController.getAllProductsController(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);

    });

    it('Return json my Data Base', async () => {
      await productsController.getAllProductsController(req, res);
      expect(res.json.calledWith(prod)).to.be.equal(false);
    })
  });
});

describe("Test Uniq Method get by id Controllers", () => {
  describe("Return success id get", async () => {
    const prod =
    {
      id: 1,
      name: "Martelo de Thor",
    };
    const req = {};
    const res = {};
    before(() => {
      req.params = { id: 1 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsServices, "getByIdProductServices")
        .resolves(prod);
    });
    after(() => {
      productsServices.getByIdProductServices.restore();
    });

    it("Return Id Product Com status code 200", async () => {
      await productsController.getByIdProductsController(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);

    });
    it("Return Id Product Com um json", async () => {
      await productsController.getByIdProductsController(req, res);
      expect(res.json.calledWith(prod)).to.be.equal(false);
    });
  });
});

describe("Test Uniq Method Post Controllers Controllers", () => {

  describe("Return success post", async () => {
    const res = {};
    const req = {};
    const prod = {
      id: 1,
      name: "Joia do infinito",
    };

    before(() => {
      req.body = {
        name: "Joia do infinito"
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsServices, "getByNameProductServices").resolves(prod);
    });

    after(() => {
      productsServices.getByNameProductServices.restore();
    });

    it("Return status code 201", async () => {
      await productsController.getByNameProductsController(req, res);
      expect(res.status.calledWith(201)).to.be.equal(true);
    });
  });
});

describe("Test Uniq Method Put Controllers Controllers", () => {
  describe("Return success put", async () => {
    const prod = {
      id: 1,
      name: "Joia do infinito",
    };
    const req = {};
    const res = {};
    before(() => {
      req.params = { id: 1 };
      req.body = { name: "Joia do infinito" };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsServices, "sendByUpdateProductServices").resolves(prod);
    });
    after(() => {
      productsServices.sendByUpdateProductServices.restore();
    });

     it("Return Product update", async () => {
      await productsController.updateProductsController(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith(prod)).to.be.equal(true);
    });
  });
});