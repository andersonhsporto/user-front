import { FormControl } from "@angular/forms";

export interface IUserForm {
  name: FormControl<string>;
  username: FormControl<string>;
  email: FormControl<string>;
  dateOfBirth?: FormControl<Date | null>;
  password?: FormControl<string>;
}
