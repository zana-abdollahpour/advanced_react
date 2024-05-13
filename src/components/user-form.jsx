import includeUpdatableResource from "./include-updatable-resource";

export const UserForm = includeUpdatableResource(
  ({ user, onChangeUser, onPostUser, onResetUser }) => {
    const { name, age } = user || null;

    return user ? (
      <>
        <label>
          Name:
          <input
            value={name}
            onChange={(e) => onChangeUser({ name: e.target.value })}
          ></input>
        </label>
        <label>
          Age:
          <input
            value={age}
            type="number"
            onChange={(e) => onChangeUser({ age: +e.target.value })}
          ></input>
        </label>
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onPostUser}>Save</button>
      </>
    ) : (
      <h3>loading...</h3>
    );
  },
  "/users/4",
  "user"
);
