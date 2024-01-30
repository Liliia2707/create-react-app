import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

export const AddNewUser = ({ addUserToList }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const watchAge = watch("age");

  const handleAddUser = (data) => {
    console.log(data);
    const newUser = {
      ...data,
      id: uuidv4(),
    };
    console.log(newUser);
    addUserToList(newUser);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(handleAddUser)}>
      <p>{watchAge}</p>
      <label htmlFor="name">
        FirstName
        <input
          type="text"
          id="name"
          {...register("firstName", {
            required: true,
            minLength: {
              value: 4,
              message: "имя должно быть длинее трех букв",
            },
            maxLength: {
              value: 8,
              message: "имя должно быть короче девяти букв",
            },
          })}
        />
      </label>
      <p style={{ color: "red" }}>{errors.firstName?.message}</p>
      <label htmlFor="age">
        Age
        <input
          type="number"
          id="age"
          {...register("age", {
            required: true,
            min: {
              value: 18,
              message: "Пользователь должен быть старше 18 лет",
            },
            max: {
              value: 150,
              message: "Пользователь не может быть старше 150 лет",
            },
          })}
        />
      </label>
      <p style={{ color: "red" }}>{errors.age?.message}</p>

      <label htmlFor="phone">
        Phone number
        <input
          type="tel"
          id="phone"
          {...register("phone", {
            required: true,
            pattern: {
              value: /(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/g,
              message: "Вы должны ввести немецкий номер",
            },
          })}
        />
      </label>
      <p style={{ color: "red" }}>{errors.phone?.message}</p>

      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Введите корректный email",
            },
          })}
        />
      </label>
      <p style={{ color: "red" }}>{errors.email?.message}</p>
      <button type="submit">Add User</button>
      <p>{isSubmitSuccessful ? "Спасибо, данные отправлены" : ""}</p>
    </form>
  );
};
