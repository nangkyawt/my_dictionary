import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  word: string = '';
  wordDetails: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    // Get the word from the URL parameter
    this.word = this.route.snapshot.paramMap.get('word') || 'Unknown'; // Default to 'apple'

    // Call the API to fetch the word details
    this.apiService.getWordDetails(this.word).subscribe(
      (data) => {
        this.wordDetails = data;
      },
      (error) => {
        console.error('Error fetching word details:', error);
      }
    );
  }
}
