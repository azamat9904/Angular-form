import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {Address, User} from '../../shared/types';


const fields = {
  commonInfo: {
    name: {
      validators: ['required']
    },
    phone: {
      validators: ['required']
    },
    email: {
      validators: ['required', 'email']
    }
  },
  company: {
    name: {
      validators: ['required']
    },
    catchPhrase: {
      validators: []
    },
    bs: []
  },
  address: {
    street: {
      validators: ['required']
    },
    suite: {
      validators: ['required']
    },
    city: {
      validators: ['required']
    },
    zipcode: {
      validators: ['required']
    }
  }
};

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {
  form: FormGroup;
  user: User;

  fieldNameMap = {
    commonInfo: [
      {
        text: 'Name',
        field: 'name'
      },
      {
        text: 'Phone',
        field: 'phone'
      },
      {
        text: 'Email',
        field: 'email'
      },
    ],
    company: [
      {
        text: 'Name',
        field: 'name'
      },
      {
        text: 'Catch Phrase',
        field: 'catchPhrase'
      },
    ],
    address: [
      {
        text: 'Street',
        field: 'street'
      },
      {
        text: 'Suite',
        field: 'suite'
      },
      {
        text: 'City',
        field: 'city'
      },
      {
        text: 'Zip code',
        field: 'zipcode'
      },
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  get bsFormArray(): FormArray {
    return this.form.get('company').get('bs') as FormArray;
  }

  ngOnInit(): void {
    this.form = new FormGroup({});

    Object.keys(fields).forEach(groupKey => {
      this.form.addControl(groupKey, new FormGroup({}));
      const group = this.form.get(groupKey) as FormGroup;

      Object.keys(fields[groupKey]).forEach(fieldKey => {

        if (Array.isArray(fields[groupKey][fieldKey])) {
          group.addControl(fieldKey, new FormArray([]));
          return;
        }

        const validators = [];
        if (fields[groupKey][fieldKey].validators && Array.isArray(fields[groupKey][fieldKey].validators)) {
          fields[groupKey][fieldKey].validators.forEach(validator => {
            switch (validator) {
              case 'required' :
                validators.push(Validators.required);
                break;
              case 'email' :
                validators.push(Validators.email);
                break;
            }
          });
        }
        group.addControl(fieldKey, new FormControl('', validators));
      });
    });

    this.route.data.subscribe((data: Data) => {
      this.user = data.userDetail;
      this.form.get('commonInfo').patchValue(this.user);
      this.form.get('company').patchValue({...this.user.company, bs: []});
      this.user.company.bs.split(' ').forEach(bsEl => {
        this.bsFormArray.push(new FormControl(bsEl));
      });
      this.form.get('address').patchValue(this.user.address);
    });

  }
  addBs(): void{
    this.bsFormArray.push(new FormControl(''));
    console.log(this.form);
  }

  onRemoveControl(index: number): void {
     this.bsFormArray.removeAt(index);
  }

  onSubmit(): void{
    console.log(this.form.value);
    console.log('Saved');
  }
}
