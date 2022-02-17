import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as bootstrap from "bootstrap";
import * as $ from 'jquery';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})

export class MenuPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    $(function () {

      $('[data-toggle="modal"]').hover(function () {
        var modalId: any = $(this).data('target');
        $(modalId).modal('show');

      });

    });
  }

  goToHomePage() {
    this.router.navigate(['/home-page']);
  }



}

