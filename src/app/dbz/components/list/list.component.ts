import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(id:string| undefined):void{
  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id);
  }

}