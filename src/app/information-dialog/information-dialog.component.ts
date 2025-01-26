import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

interface Reference {
  name: string;
  url: string;
}

interface ReferenceGroup {
  name: string;
  references: Reference[];
}

@Component({
  selector: 'app-information-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
  ],
  templateUrl: './information-dialog.component.html',
  styleUrl: './information-dialog.component.scss',
})
export class InformationDialogComponent {
  referenceGroups: ReferenceGroup[] = [
    {
      name: 'CharaChorder and Forge',
      references: [
        {
          name: '"Master Forge: Specs Reveal" Video',
          url: 'https://youtu.be/x2swE9URxeA?feature=shared',
        },
        {
          name: 'CC2 Product Page',
          url: 'https://www.charachorder.com/products/cc2',
        },
        {
          name: 'CCL Product Page',
          url: 'https://www.charachorder.com/products/charachorder-lite',
        },
        {
          name: 'CCX Kickstarter Page',
          url: 'https://www.kickstarter.com/projects/charachorder/charachorder-x-type-at-the-speed-of-thought/',
        },
        {
          name: 'CharaChorder Official Documentation',
          url: 'https://docs.charachorder.com',
        },
        {
          name: 'CharaChorder Discord Server',
          url: 'https://discord.gg/charachorder',
        },
      ],
    },
    {
      name: 'Svalboard',
      references: [
        {
          name: 'Svalboard Product Page',
          url: 'https://svalboard.com/products/lightly',
        },
        {
          name: 'Svalboard Manual',
          url: 'https://docs.google.com/document/d/1Um4EAIK-GLQGw-9xHUFe-aCtHJDENYUSzhcqQi9ppwU/edit?tab=t.0',
        },
        {
          name: 'QMK Combos Documentation',
          url: 'https://docs.qmk.fm/features/combo',
        },
        {
          name: 'Svalboard Discord Server',
          url: 'https://discord.gg/DnGcHM4Rg8',
        },
      ],
    },
  ];
}
