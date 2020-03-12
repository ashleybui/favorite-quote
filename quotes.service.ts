import { Injectable } from '@angular/core';
import { Quotes } from 'src/assets/data/quotes.interface';
import { findLast } from '@angular/compiler/src/directive_resolver';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private favoriteQuotes: Quotes[] = [];
  constructor() { }
  addQuoteToFavorite(quote: Quotes) {
    this.favoriteQuotes.push (quote);
    console.log(this.favoriteQuotes);

  }
  getFavoriteQuote() {
    return this.favoriteQuotes.slice();

  }
  getQuote(id:string) {
    return {...this.favoriteQuotes.find(p => p.id === p.id)};
  }
  removeQuoteFromFavorite(quote:Quotes) {
    const position = this.favoriteQuotes.findIndex((quoteEl: Quotes) => {
      return quoteEl.id === quote.id; 
    }); 
    this.favoriteQuotes.splice(position, 1);
  }
  
}

