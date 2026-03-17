import { useContext } from "react";
import Modal from "./UI/Modal";
import { UIContext } from "../contexts/UIContext";
import { CartContext } from "../contexts/CartContext";

export default function CheckOut() {
  const { uiProgress, hideCheckOut } = useContext(UIContext);
  const { items } = useContext(CartContext);

  const cartTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <Modal open={uiProgress === "checkout"}>
      <h2>CheckOut</h2>
      <p className="text-danger">Sipariş Toplamı {cartTotal} ₺</p>

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Ad Soyad
          </label>
          <input type="text" name="name" id="name" className="form-control" />
        </div>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Eposta
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
              />
            </div>
          </div>

          <div className="col">
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Telefon
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="adress" className="form-label">
            Adres
          </label>
          <textarea name="adress" id="adress" className="form-control" />
        </div>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                Şehir
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="form-control"
              />
            </div>
          </div>

          <div className="col">
            <div className="mb-3">
              <label htmlFor="district" className="form-label">
                Mahalle
              </label>
              <input
                type="text"
                name="district"
                id="district"
                className="form-control"
              />
            </div>
          </div>
        </div>
      </form>

      <button
        onClick={() => hideCheckOut()}
        className="btn btn-sm btn-outline-danger me-2"
      >
        Kapat
      </button>

      <button className="btn btn-sm btn-primary me-2">Kaydet</button>
    </Modal>
  );
}
