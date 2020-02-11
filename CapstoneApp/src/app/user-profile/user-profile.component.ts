import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  formUserProfile: FormGroup;
  validAges: number[] = [...Array(100).keys()];
  readonly MAX_LENGTH = 25;

  constructor(private formBuilder: FormBuilder ) {

    this.formUserProfile = this.formBuilder.group({
      firstName: ['', Validators.maxLength(this.MAX_LENGTH)],
      lastName: ['', Validators.maxLength(this.MAX_LENGTH)],
      age: ['', ],
      isAdmin: ['', ],
      profileImageUrl: ['', ]
    });

    // remove the first element from the array since 0 isn't an age
    this.validAges.shift();
  }

  get firstNameError() {
    return !this.formUserProfile.controls.firstName.valid && this.formUserProfile.controls.firstName.touched;
  }

  get lastNameError() {
    return !this.formUserProfile.controls.lastName.valid && this.formUserProfile.controls.lastName.touched;
  }
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formUserProfile.value);
  }
}
