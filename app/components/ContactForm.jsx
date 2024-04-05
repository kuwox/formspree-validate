import { useState } from 'react';
import { useForm } from 'react-hook-form';

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data => {
    console.log(data);
  }
    ))
  /* const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    city: 'Buenos Aires',
    userType: 'Consumidor Final',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }; */

  return (
    <form action='https://formspree.io/f/mqkrgzbz' method='POST' className="max-w-md mx-auto bg-yellow-500 rounded p-7 m-7">
    { /* <form onSubmit={onSubmit} className="max-w-md mx-auto bg-yellow-500 rounded p-7 m-7"> */}
      <p className='text-center font-bold text-2xl'>SOLICITA TU PRESUPUESTO</p>
      <p className='text-center font-semiligth text-2xl'>Respuesta inmediata</p>
      <div className="mb-4">
        <label htmlFor="nombre" className="block mb-1">Nombre:</label>
        <input type="text" className="w-full px-3 py-2 border rounded-md"
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            maxLength: 20,
            minLength: 2,
          })}
        />
        {errors.nombre?.type === "required" && <span>Nombre requerido</span>}
        {errors.nombre?.type === "maxLength" && (
          <span>Nombre no debe ser mayor a 20 caracteres</span>
        )}
        {errors.nombre?.type === "minLength" && (
          <span>Nombre debe ser mayor a 2 caracteres</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="correo" className="block mb-1">Email:</label>
        <input type="email" className="w-full px-3 py-2 border rounded-md"
          {...register("correo", {
            required: {
              value: true,
              message: "Correo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Correo no válido",
            },
          })}
        />
        {errors.correo && <span>{errors.correo.message}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-1">Teléfono:</label>
        <input type="tel" name="phone" className="w-full px-3 py-2 border rounded-md"
          {
          ...register("phone", {
            required: {
              value: true,
              message: "Teléfono es requerido"
            }
          })
          }
        />
        {
          errors.phone && <span>{errors.phone.message}</span>
        }
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-1">Mensaje:</label>
        <textarea id="message" name="message" className="w-full px-3 py-2 border rounded-md"></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block mb-1">Ciudad:</label>
        <select id="city" name="city" className="w-full px-3 py-2 border rounded-md">
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Córdoba">Córdoba</option>
          <option value="Rosario">Rosario</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Tipo de usuario:</label>
        <div>
          <input type="radio" id="consumidor" name="userType" value="Consumidor Final" className="mr-1" />
          <label htmlFor="consumidor" defaultChecked className="mr-4">Consumidor Final</label>
          <input type="radio" id="empresa" name="userType" value="Empresa" className="mr-1" />
          <label htmlFor="empresa">Empresa</label>
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Enviar</button>
    </form>
  );
};

export default ContactForm;
