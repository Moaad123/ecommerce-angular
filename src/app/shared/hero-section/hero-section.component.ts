import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  @Input() sectionTitle = '';
  @Input() sectionSlogan = '';
  @Input() pageName = '';
  constructor() { }

  ngOnInit(): void {
  }

}
