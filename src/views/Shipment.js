import React from "react";
import Select from "react-select";
import { useHistory } from "react-router";
import { ReactComponent as Lock } from "../assets/icons/Locked.svg";
import { ReactComponent as Delivery } from "../assets/icons/Delivery.svg";
import { ReactComponent as Favorite } from "../assets/icons/Favorite.svg";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { insertShipment } from "../redux-action/cartAction";
import { useState } from "react";
import { useEffect } from "react";

const documentType = [
  { value: 1, label: "DNI" },
  { value: 2, label: "C/E" },
  { value: 3, label: "RUC" },
];

const departamentos = [{ value: 1, label: "Lima" }];

const provincias = [{ value: 1, label: "Lima" }];

const distritos = [
  { value: 1, label: "Ancón" },
  { value: 2, label: "Ate Vitarte" },
  { value: 3, label: "Barranco" },
  { value: 5, label: "Breña" },
  { value: 6, label: "Carabayllo" },
  { value: 7, label: "Chaclacayo" },
  { value: 8, label: "Chorrillos" },
  { value: 9, label: "Cieneguilla	" },
  { value: 10, label: "Comas" },
  { value: 11, label: "El Agustino" },
  { value: 12, label: "Independencia" },
  { value: 13, label: "Jesús María" },
  { value: 14, label: "La Molina" },
  { value: 15, label: "La Victoria" },
  { value: 16, label: "Lima" },
  { value: 17, label: "Lince" },
  { value: 18, label: "Los Olivos" },
  { value: 19, label: "Lurigancho" },
  { value: 20, label: "Lurín" },
  { value: 21, label: "Magdalena del Mar" },
  { value: 22, label: "Miraflores" },
  { value: 23, label: "Pachacamac" },
  { value: 24, label: "Pucusana" },
  { value: 25, label: "Pueblo Libre" },
  { value: 26, label: "Puente Piedra" },
  { value: 27, label: "Punta Hermosa" },
  { value: 28, label: "Punta Negra" },
  { value: 29, label: "Rímac" },
  { value: 30, label: "San Bartolo" },
  { value: 31, label: "San Borja" },
  { value: 32, label: "San Isidro" },
  { value: 33, label: "San Juan de Lurigancho" },
  { value: 34, label: "San Juan de Miraflores" },
  { value: 35, label: "San Luis" },
  { value: 36, label: "San Martín de Porres" },
  { value: 37, label: "San Miguel" },
  { value: 38, label: "Santa Anita" },
  { value: 39, label: "Santa María del Mar" },
  { value: 40, label: "Santa Rosa" },
  { value: 41, label: "Santiago de Surco" },
  { value: 42, label: "Surquillo" },
  { value: 43, label: "Villa El Salvador" },
  { value: 44, label: "Villa María del Triunfo" },
];

const ProductCart = ({ imgUrl, name, sku, cantidad, precioUnit, subtotal }) => {
  return (
    <div className="ui-bg s-mb-2 s-d-flex">
      <div className="s-20">
        <img src={imgUrl} alt="" />
      </div>
      <div className="s-80 s-pl-2">
        <div className="t--body-2 s-main-justify s-cross-center s-mb-1">
          <span> {name} </span>
        </div>
        <div className="t--secundary t--body-3 s-column">
          <span className="s-pb-05"> SKU: {sku} </span>
          <span className="s-pb-05"> Cantidad: {cantidad} </span>
          <span className="s-pb-05">
            Precio/u:
            <span className="t--price">{precioUnit}</span>
          </span>
        </div>
        <div className="s-right">
          <h6 className="t--secundary t--price"> {subtotal}</h6>
        </div>
      </div>
    </div>
  );
};

const Shipment = () => {
  const history = useHistory();
  const [userStorage, setUserStorage] = useState(undefined);
  useEffect(() => {
    userStorage
      ? setUserStorage(JSON.parse(localStorage.getItem("user")))
      : setUserStorage(null);
  }, []);

  const { productsList, subtotal } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    data = {
      ...data,
      documentType: data.documentType.label,
      departamento: data.departamento.label,
      provincia: data.provincia.label,
      distrito: data.distrito.label,
    };
    console.log(data);
    dispatch(insertShipment(data));
    history.push("/pago");
  };

  return (
    <div className="l-section">
      <div id="steps">
        <div className="step done" data-desc="Carrito de compras">
          1
        </div>
        <div className="step active" data-desc="Método de envio">
          2
        </div>
        <div className="step" data-desc="Realizar pago">
          3
        </div>
        <div className="step" data-desc="Pedido confirmado">
          4
        </div>
      </div>
      <div className="grid-container">
        <div className="ui-bg s-pxy-3 s-mb-4">
          <h2> Método de envio </h2>
        </div>
        <div className="flex-container">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-item s-70 s-px-0 s-pr-2"
          >
            <div className="ui-bg s-mb-2 s-pxy-4">
              <h4 className="s-mb-2">Datos del cliente</h4>
              <div className="s-d-flex s-100 s-mb-2">
                <div className="input-group input-group-large s-50 s-pr-1">
                  <label
                    className="input-group__label d-block s-mb-1"
                    htmlFor="input"
                  >
                    Nombres
                  </label>
                  <div className="input-group__box s-mb-05">
                    <input
                      name="name"
                      id="name"
                      className={`box__text ${
                        errors.name ? "box__text--error" : ""
                      }`}
                      type="text"
                      {...register("name", {
                        required: "Campo requerido",
                        pattern: {
                          value: /^[^0-9]+$/i,
                          message: "Nombre inválido",
                        },
                      })}
                    />
                  </div>
                  {errors.name && (
                    <span className="input-group__helper input-group__helper--error s-d-block s-left">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="input-group input-group-large s-50 s-pl-1">
                  <label
                    className="input-group__label d-block s-mb-1"
                    htmlFor="input"
                  >
                    Apellidos
                  </label>
                  <div className="input-group__box s-mb-05">
                    <input
                      type="text"
                      className={`box__text ${
                        errors.lastName ? "box__text--error s-mb-05" : ""
                      }`}
                      {...register("lastName", {
                        required: "Campo requerido",
                        pattern: {
                          value: /^[^0-9]+$/i,
                          message: "Nombre inválido",
                        },
                      })}
                    />
                    {errors.lastName && (
                      <span className="input-group__helper input-group__helper--error s-d-block s-left">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="s-d-flex s-100 s-mb-2">
                <div className="s-25 s-pr-1">
                  <label
                    className="input-group__label d-block s-mb-1"
                    htmlFor="input"
                  >
                    Tipo documento
                  </label>
                  <Controller
                    control={control}
                    name="documentType"
                    defaultValue={false}
                    rules={{ required: "Campo obligatorio" }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={documentType}
                        classNamePrefix="input-select"
                        className={`t--body-2 s-mb-05 ${
                          errors.documentType ? "input-select--error" : ""
                        }`}
                        placeholder=""
                        theme={(theme) => ({
                          ...theme,
                          colors: {
                            ...theme.colors,
                            primary: "#c6c6c6",
                            primary25: "#e5e5e5",
                            primary50: "#e0e0e0",
                            neutral0: "#161616",
                          },
                        })}
                      />
                    )}
                  />
                  {errors.documentType && (
                    <span className="input-group__helper input-group__helper--error s-d-block s-left">
                      {errors.documentType.message}
                    </span>
                  )}
                </div>
                <div className="input-group input-group-large s-75 s-pl-1">
                  <label
                    className="input-group__label d-block s-mb-1"
                    htmlFor="input"
                  >
                    Nro. Documento
                  </label>
                  <div className="input-group__box s-mb-05">
                    <input
                      className={`box__text ${
                        errors.numberDoc ? "box__text--error s-mb-05" : ""
                      }`}
                      type="text"
                      {...register("numberDoc", {
                        required: "Campo requerido",
                        pattern: {
                          value: /^\d+$/i,
                          message: "Documento inválido",
                        },
                      })}
                    />
                    {errors.numberDoc && (
                      <span className="input-group__helper input-group__helper--error s-d-block s-left">
                        {errors.numberDoc.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="input-group input-group-large s-mb-2">
                <label
                  className="input-group__label d-block s-mb-1"
                  htmlFor="input"
                >
                  Número de celular
                </label>
                <div className="input-group__box s-mb-05">
                  <input
                    type="text"
                    className={`box__text ${
                      errors.phoneNumber ? "box__text--error s-mb-05" : ""
                    }`}
                    {...register("phoneNumber", {
                      required: "Campo requerido",
                      pattern: {
                        value: /^\d+$/i,
                        message: "Celular inválido",
                      },
                    })}
                  />
                  {errors.phoneNumber && (
                    <span className="input-group__helper input-group__helper--error s-d-block s-left">
                      {errors.phoneNumber.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="input-group input-group-large s-mb-3">
                <label
                  className="input-group__label d-block s-mb-1"
                  htmlFor="input"
                >
                  Correo Electrónico
                </label>
                <div className="input-group__box s-mb-05">
                  <input
                    type="text"
                    className={`box__text ${
                      errors.email ? "box__text--error s-mb-05" : ""
                    }`}
                    {...register("email", {
                      required: "Campo requerido",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email inválido",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="input-group__helper input-group__helper--error s-d-block s-left">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="divider s-mb-3" />
              <h4 className="s-mb-2">Datos del envío</h4>
              <div className="s-d-flex s-100 s-mb-2">
                <div className="s-1-3 s-pr-1">
                  <label
                    className="input-group__label d-block s-mb-1"
                    htmlFor="input"
                  >
                    Departamento
                  </label>
                  <Controller
                    control={control}
                    name="departamento"
                    defaultValue={departamentos[0]}
                    rules={{ required: "Campo obligatorio" }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={departamentos}
                        classNamePrefix="input-select"
                        className={`t--body-2 s-mb-05 ${
                          errors.departamento ? "input-select--error" : ""
                        }`}
                        placeholder=""
                        theme={(theme) => ({
                          ...theme,
                          colors: {
                            ...theme.colors,
                            primary: "#c6c6c6",
                            primary25: "#e5e5e5",
                            primary50: "#e0e0e0",
                            neutral0: "#161616",
                          },
                        })}
                      />
                    )}
                  />
                  {errors.departamento && (
                    <span className="input-group__helper input-group__helper--error s-d-block s-left">
                      {errors.departamento.message}
                    </span>
                  )}
                </div>
                <div className="s-1-3 s-px-1">
                  <label
                    className="input-group__label d-block s-mb-1"
                    htmlFor="input"
                  >
                    Provincia
                  </label>
                  <Controller
                    control={control}
                    name="provincia"
                    defaultValue={provincias[0]}
                    rules={{ required: "Campo obligatorio" }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={provincias}
                        classNamePrefix="input-select"
                        className={`t--body-2 s-mb-05 ${
                          errors.provincia ? "input-select--error" : ""
                        }`}
                        placeholder=""
                        theme={(theme) => ({
                          ...theme,
                          colors: {
                            ...theme.colors,
                            primary: "#c6c6c6",
                            primary25: "#e5e5e5",
                            primary50: "#e0e0e0",
                            neutral0: "#161616",
                          },
                        })}
                      />
                    )}
                  />
                  {errors.provincia && (
                    <span className="input-group__helper input-group__helper--error s-d-block s-left">
                      {errors.provincia.message}
                    </span>
                  )}
                </div>
                <div className="s-1-3 s-pl-1">
                  <label
                    className="input-group__label d-block s-mb-1"
                    htmlFor="input"
                  >
                    Distrito
                  </label>
                  <Controller
                    control={control}
                    name="distrito"
                    defaultValue={false}
                    rules={{ required: "Campo obligatorio" }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={distritos}
                        classNamePrefix="input-select"
                        className={`t--body-2 s-mb-05 ${
                          errors.distrito ? "input-select--error" : ""
                        }`}
                        placeholder=""
                        theme={(theme) => ({
                          ...theme,
                          colors: {
                            ...theme.colors,
                            primary: "#c6c6c6",
                            primary25: "#e5e5e5",
                            primary50: "#e0e0e0",
                            neutral0: "#161616",
                          },
                        })}
                      />
                    )}
                  />
                  {errors.distrito && (
                    <span className="input-group__helper input-group__helper--error s-d-block s-left">
                      {errors.distrito.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="s-d-flex s-100 s-mb-2">
                <div className="input-group input-group-large s-50 s-pr-1">
                  <label
                    className="input-group__label d-block s-mb-1"
                    htmlFor="input"
                  >
                    Direccion
                  </label>
                  <div className="input-group__box s-mb-05">
                    <input
                      type="text"
                      className={`box__text ${
                        errors.address ? "box__text--error s-mb-05" : ""
                      }`}
                      {...register("address", { required: "Campo requerido" })}
                    />
                    {errors.address && (
                      <span className="input-group__helper input-group__helper--error s-d-block s-left">
                        {errors.address.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="input-group input-group-large s-50 s-pl-1">
                  <label
                    className="input-group__label d-block s-mb-1"
                    htmlFor="input"
                  >
                    Referencia
                  </label>
                  <div className="input-group__box s-mb-05">
                    <input
                      className="box__text"
                      type="text"
                      {...register("reference")}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn--primary btn--full btn--large"
              >
                Ir a pagar
              </button>
            </div>
          </form>
          <div className="flex-item s-30 s-px-0 s-pl-2">
            <div className="ui-bg s-pxy-3 s-mb-2">
              <h3 className="s-mb-3">Resumen de compra</h3>
              <div className="s-mb-3">
                {productsList.map((product, index) => (
                  <ProductCart
                    key={index}
                    id={product._id}
                    imgUrl={product.imagenes[0]}
                    marca={"Marca"}
                    name={product.nombre}
                    sku={product.codigoInterno}
                    cantidad={product.cantidadCarrito}
                    precioUnit={product.precio}
                    subtotal={product.subtotalProduct}
                  />
                ))}
              </div>
              <div className="s-main-justify t--secundary s-mb-3">
                <h5> Subtotal (Inc. IGV) </h5>
                <h5 className="t--price"> {subtotal}</h5>
              </div>
              <div className="s-main-justify t--secundary s-mb-3">
                <h5> Costo de envío </h5>
                <h5> Gratis </h5>
              </div>
              <button
                className="btn btn--secundary btn--full"
                onClick={() => history.push("/carrito")}
              >
                Volver al carrito
              </button>
            </div>
            <div className="ui-bg s-pxy-3 s-d-flex s-main-distribute">
              <div className="s-d-flex s-column s-cross-center s-1-3 s-px-2">
                <Lock className="s-mb-2" />
                <span className="t--body-2 s-center">Compras 100% seguras</span>
              </div>
              <div className="s-d-flex s-column s-cross-center s-1-3 s-px-2">
                <Delivery className="s-mb-2" />
                <span className="t--body-2 s-center">
                  Envios a todo el peru
                </span>
              </div>
              <div className="s-d-flex s-column s-cross-center s-1-3 s-px-2">
                <Favorite className="s-mb-2" />
                <span className="t--body-2 s-center">Clientes satisfechos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
