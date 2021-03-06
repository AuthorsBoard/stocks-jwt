import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeStockComponent } from './trade-stock.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {UserService} from '@shared/services/user/user.service';
import {SharesService} from '@shared/services/shares/shares.service';
import {TokenStorageService} from '@shared/services/token-storage/token-storage.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {PrimengModule} from '@shared/primeng.module';
import {AccountService} from '@shared/services/account/account.service';

describe('BuyStockComponent', () => {
  let component: TradeStockComponent;
  let fixture: ComponentFixture<TradeStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule, PrimengModule],
      declarations: [ TradeStockComponent ],
      providers: [UserService, SharesService, AccountService, TokenStorageService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeStockComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
