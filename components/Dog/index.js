import React, { Component } from 'react';
import s from './Dog.css';

export class Dog extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { width, height } = this.props;
    return (
      <svg className={s.dog} width={width} height={height} viewBox="0 0 324 252.73">
        <path d="M207.73,235.86" transform="translate(-18.1 -53.2)" style={{fill: '#502211'}} />
        <path d="M147.12,305.93l-.65-.62A2,2,0,0,0,147.12,305.93Z" transform="translate(-18.1 -53.2)" style={{fill: 'none'}} />
        <path d="M235,301.87l-.61.62A2,2,0,0,0,235,301.87Z" transform="translate(-18.1 -53.2)" style={{fill: 'none'}} />
        <path d="M331.6,102.77l-.09-.17c-1.61-3.5-3.59-5.69-5.87-6.51a6.53,6.53,0,0,0-4.68.14l-8.28,4.28,2.55-5.37a31.41,31.41,0,0,1-8.84,1.15l-3.1-.13.09-3.1a22.75,22.75,0,0,1,2.6-9.73c-9-3.51-16.68-4.07-22.74-1.66a17.38,17.38,0,0,0-9.41,8.63l-1.29,3.24-3.09-1.61a11,11,0,0,1-6.07-7.43,12.17,12.17,0,0,1-.07-4.64A86.75,86.75,0,0,0,246.1,93.48c.1.75.2,1.4.29,1.92,10.09,5.35,18.07,14.27,23.71,22.25a119.36,119.36,0,0,1,23.72-.4c15.17,15.15,8.92,37.11,6.67,43.41a19.47,19.47,0,0,1,4.49,7,27.61,27.61,0,0,1,3.35,7.66c20-14.07,13.4-30.79,13.09-31.53l-2.48-5.85,6.16,1.58a32.54,32.54,0,0,0,6.43,1c-6.28-10.22-.92-25.55-.69-26.2l1.85-5.19,2.55,3.07A42.64,42.64,0,0,0,331.6,102.77Z" transform="translate(-18.1 -53.2)" style={{fill: '#fec869'}} />
        <path d="M293.81,117.24a119.36,119.36,0,0,0-23.72.4,104.7,104.7,0,0,1,9.8,16.94l2.47,5.66-5.9-1.15a53,53,0,0,0,12.44,17.07,16.15,16.15,0,0,1,6.28,1,15.49,15.49,0,0,1,5.31,3.45C302.73,154.35,309,132.39,293.81,117.24Z" transform="translate(-18.1 -53.2)" style={{fill: '#f27395'}} />
        <path d="M335.32,122.12c-.81,4.55-1.17,10.87,1.67,15.28.27.42,1.7,2.18,3.16,2.47l.3,6.09a31.21,31.21,0,0,1-11.89.6,30.83,30.83,0,0,1,0,9.84c-2.31,13.92-13.5,22.77-22.48,27.75l-3.39-5.28a1.41,1.41,0,0,0-.36.35s1-2.17-2.87-8.57l-.21-.35-.12-.37c0-.05-1.65-5.13-6.23-6.87a12.11,12.11,0,0,0-7.71,0,72.28,72.28,0,0,1,8.24,10.77l5.94,9.43-10.07-4.78a27,27,0,0,0-3.46-1.4c4,7.27,1.76,18.23,1.43,19.73l-2.15,9.74-4-9.14a4.71,4.71,0,0,0-2.84-2c2.55,7,8.47,16.22,11,19.79l2.6,3.68-4.31,1.3a20.63,20.63,0,0,1-4.65.86q.1.35.18.72a19.16,19.16,0,0,1,.42,5.83l0,.28-.08.27c-1.71,5.93-2.38,23.32-2.49,29.52l-.14,7.66-5.4-5.43a11.36,11.36,0,0,0-3.86-2.22c-4.55,26-18.79,27.1-19.42,27.13l-4.71.25.85-2.62a53.39,53.39,0,0,1-13.09,9,35.29,35.29,0,0,1-5.7,2.11c-8.09,2.2-13.13.09-13.52-.08l-2.13-.94a33.84,33.84,0,0,1-9.84,4.56,15.07,15.07,0,0,1-11.87-2,17.71,17.71,0,0,1-13.78.07c-2.7-.93-4.9-.94-6.54,0-2.54,1.38-3.33,4.63-3.34,4.67l-.36,1.52-1.42.69a7.48,7.48,0,0,1-3.09.71c-3,.05-6.48-1.5-10.42-4.64-.47-.38-.93-.76-1.37-1.15a55.25,55.25,0,0,1-4-3.85l-2.07-.25a26.31,26.31,0,0,1-7-1.64A37.35,37.35,0,0,0,135,290c-12.83-3.51-18.39-7.56-19.82-8.74-6.59-3.73-9.49-8.44-10.59-12.76L104,268c-4.17-3.58-3.46-9.87-2.54-13.62a17.67,17.67,0,0,1-6.68-7.75l-.1-.24-.06-.25c-1.45-6.13-.22-15.42.9-21.52a24.71,24.71,0,0,1-6.54-.06c-2.5-.43-3.88-1.57-4.13-3.38a3.62,3.62,0,0,1,2.25-3.79,8.47,8.47,0,0,0,1.59-1.2L82.26,218l6-7.79c1.33-1.72,3-8.54,4-14.49-3-2.32-7.52-.5-7.57-.48l-2.65-5.91a22.83,22.83,0,0,0,5.27-3.24,23.08,23.08,0,0,1-5.54-12.77c-3.34-.6-6.14-.3-8.36.9-4.3,2.34-5.23,7.6-5.23,7.66l-.06.38-.16.38c-3,6.88-1.68,8.86-1.67,8.88a1.41,1.41,0,0,0-.41-.29l-2.63,5.69c-9.57-3.7-21.87-10.93-26.07-24.4a30.83,30.83,0,0,1-1.39-9.74,31.21,31.21,0,0,1-11.86,1l-.53-6.07c1.41-.49,2.58-2.42,2.8-2.88,2.21-4.76,1-11-.44-15.36l-2.87,4.62-2.72-4c-4.74-6.9,0-20.48.7-22.43,1.65-5.39,4.39-9.08,8.14-11a12.5,12.5,0,0,1,3.23-1.11l3.8-4A20.49,20.49,0,0,0,46.24,104a17.22,17.22,0,0,0-3.62-5.44L39.55,95.8l3.51-2.2C54.39,86.48,64.62,84,73.48,86.24a24.19,24.19,0,0,1,11.78,6.94,3.83,3.83,0,0,0,.34-1.3c.24-3-2.71-6.67-3.76-7.71l-8.6-8.47,11.64,3.2c12.62,3.47,22.93,10.21,28.93,14.81a61.06,61.06,0,0,1,16.41-4.23,3.07,3.07,0,0,0-1.16-.71.53.53,0,0,0,.45-.22h0l-5.46-3.49a4.83,4.83,0,0,1,.28-.41c3.59-5,11.34-6.63,23.07-4.93a99.52,99.52,0,0,1,11.51,2.43,31.65,31.65,0,0,0-4.26-9.53l-3.45-5.21,6.25.18c10.78.32,16.64,5.25,19.45,10.11A33,33,0,0,1,207,67.22l5.61.84L209,72.47a4.93,4.93,0,0,0-.9,1.82c.31.19,1.42.69,4.33.7,1.7,0,2.32-.55,2.67-1,1.71-2.35.82-8.54-.36-12.18L212.92,56l5.81,1.6c6,1.67,9.32,5,11,8.4,6.9-6.71,17.44-12.08,18.93-12.83l3.6,5.33c-5.66,5-6.92,15-7,22.45,0,1.54,0,3,.09,4.47a84.47,84.47,0,0,1,23.12-15.26l11.09-4.77L272.19,75c-.9,1.17-3.32,5.18-2.67,8.15a3.83,3.83,0,0,0,.51,1.24,24.19,24.19,0,0,1,10.72-8.49c8.47-3.43,18.94-2.38,31.14,3.11l3.78,1.7L313,83.88a17.22,17.22,0,0,0-2.84,5.89A20.49,20.49,0,0,0,319.95,86l4.32,3.45a12.5,12.5,0,0,1,3.35.66c4,1.37,7.2,4.65,9.57,9.76,1,1.84,7.51,14.64,3.77,22.12l-2.15,4.3ZM90.05,134.68c.71-.69,1.4-1.3,2.07-1.84a44.21,44.21,0,0,0-10.76-.94l-6.93.37,4-5.33.16-.22a49.54,49.54,0,0,1,24.07-17.6c-1,0-1.93.11-2.85.21l-10.71,1.14,8.3-6.86a64.54,64.54,0,0,1,10-6.79,85.1,85.1,0,0,0-16.08-9,12.17,12.17,0,0,1,.57,4.6,11,11,0,0,1-5,8.19l-2.84,2-1.72-3a17.38,17.38,0,0,0-10.5-7.26c-6.34-1.55-13.83.05-22.3,4.76a22.75,22.75,0,0,1,3.9,9.28l.51,3.06-3.05.55A31.41,31.41,0,0,1,42,110l3.27,5-8.79-3.11a6.53,6.53,0,0,0-4.65.5c-2.15,1.12-3.8,3.56-4.92,7.25l-.06.18a42.64,42.64,0,0,0-2.31,9.81l2.1-3.39,2.55,4.89c.32.62,7.73,15.06,2.91,26.05a32.54,32.54,0,0,0,6.23-1.86l5.88-2.41-1.66,6.14c-.2.78-4.42,18.24,17.29,29.44a27.61,27.61,0,0,1,2.27-8,19.47,19.47,0,0,1,3.48-7.55,15.49,15.49,0,0,1,4.78-4.14A18.11,18.11,0,0,1,81.9,167a32.24,32.24,0,0,1,.7-3.64c.28-1.11.61-2.18,1-3.18l-4.73,4.93,1.29-9.48.05-.4C81.62,144.77,86.34,138.28,90.05,134.68Zm186.46,42.39.22-2a5.44,5.44,0,0,1,2.82-4,7.19,7.19,0,0,1,3.21-.86c-1.85-2.27-3.69-4.17-5-4.82l-3.46-1.74,2.32-3.1a14.53,14.53,0,0,1,3.86-3.59,55.86,55.86,0,0,1-11.31-18.6,3.88,3.88,0,0,1,2.4-5.87c-4.4-8.19-14.76-24.8-29.53-32l-1.44-.7-.32-1.57c-.2-1-3.72-18.86.62-32.87-4.34,3-8.56,6.54-10.23,9.77l-6.08-2a7.53,7.53,0,0,0-2.19-6.28c.38,3.65.17,7.94-2,11a9.21,9.21,0,0,1-7.92,3.72c-2,0-8.14,0-10.22-4.37a6.38,6.38,0,0,1-.5-3.82h-.86c-15.23.28-22.14,12.54-22.22,12.67l-5.1,9.29-1-10.55a11.62,11.62,0,0,0-2.31-5.19,13.36,13.36,0,0,0-7-4.55c1.67,3.75,3.11,8.57,1.9,12.47l-1,3.16-3.14-1a96.92,96.92,0,0,0-14.66-3.42,41.36,41.36,0,0,0-10.69-.37,31.11,31.11,0,0,1,3.77,5l-3,5a37.93,37.93,0,0,0-6.66.4,55.91,55.91,0,0,0-13.61,3.67h0c-1,.43-2.1.9-3.17,1.42s-2.1,1-3.16,1.65a28.31,28.31,0,0,1,4.91,1q.62.18,1.21.41l.54.21c.44.18.86.38,1.27.6s.61.34.9.53l.44.3a8.21,8.21,0,0,1,2.16,2.25l3.39,5.38-6.34-.42a24.93,24.93,0,0,0-2.92,0c-.83.05-1.82.15-2.93.3l-1.05.16-.13,0a42.83,42.83,0,0,0-23.27,12.06c1.09.11,2.24.26,3.43.47a29.05,29.05,0,0,1,8.56,2.76c.33.18.65.36,1,.55l3.84,2.37.52.32,1.28.79-1.85.69-.68.25-3.68,1.37c-.39.15-8.63,3.48-12.39,14.61a8.48,8.48,0,0,1,3.49.35l4.21,1.34-2.54,3.61a31.26,31.26,0,0,0-5,13.44q-.06.66-.09,1.34a19.62,19.62,0,0,0,0,2,17.46,17.46,0,0,0,.64,3.65,17.19,17.19,0,0,0,4.35,7.31,4.45,4.45,0,0,1,1.12,3.84,5.87,5.87,0,0,1-.91,2.25,11.48,11.48,0,0,1,4.92,3.68l.86,1.09-.2,1.38a100.25,100.25,0,0,1-2.55,12.13l2-.59a2.91,2.91,0,0,1,1.88-.17l2.49.5.11,2.54a2.84,2.84,0,0,1-1,2.51l-.73.79c-1.86,2-3.46,3.71-4.84,5.1a2.85,2.85,0,0,0,1-.44.92.92,0,0,0-.19.26l6,2.28c-1.13,4.51-3.7,17.55-2.26,24.34.41.84,2.21,4.19,5.41,5.1l3.42,1-1.28,3.32a19.4,19.4,0,0,0-.86,3.12l4,1.46-1,3.51c-.52,3.59.12,9.52,8.07,13.91l.34.19.29.27s4.66,4,17.46,7.53a43.25,43.25,0,0,1,4.21,1.37c1.69.63,2.72,1,8.71,1.65l1.27.13.84,1c3.76,4.32,8.56,7.87,11,8.33a13.56,13.56,0,0,1,5.77-6.72c3.38-1.88,7.43-2,12.05-.36l.24.08.22.12c.13.06,4.21,2,10-.85l2.08-1,1.66,1.63a8.57,8.57,0,0,0,7.64,1.71c.11,0,12.47-3.26,16.77-14.71l2.41-6.44,3.43,6c.73,1.27,1.73,4.83-2.46,12.43,5.41-.1,15.91-2.81,29.09-18.55l7-8.38-1.31,10.85c0,.11-.19,1.53-.58,3.57l.51-.49c2.92-3,6.74-9.19,8.36-21.91l.44-3.43,3.4.66a28.11,28.11,0,0,1,5.12,1.58c.27-7.23.94-19.48,2.48-25.22,0-1,.09-5-2.3-7.15a10.84,10.84,0,0,1-2.23-1.38l3.34-5.46a11.6,11.6,0,0,1,2.35,1.3,9.6,9.6,0,0,0,2.8.57c-3.71-5.78-9.58-15.86-10.36-22.88l-.41-3.67,3.7.07a21.39,21.39,0,0,1,7.65,1.67c.2-4.42-.35-9.69-3.37-11.59ZM98.28,206.73a3.25,3.25,0,0,0-1.09.84A4.87,4.87,0,0,1,98.28,206.73Zm3.59,5.3a5.19,5.19,0,0,1-1.54.8A3.19,3.19,0,0,0,101.87,212Zm233.36-99.85a42.64,42.64,0,0,0-3.63-9.41l-.09-.17c-1.61-3.5-3.59-5.69-5.87-6.51a6.53,6.53,0,0,0-4.68.14l-8.28,4.28,2.55-5.37a31.41,31.41,0,0,1-8.84,1.15l-3.1-.13.09-3.1a22.75,22.75,0,0,1,2.6-9.73c-9-3.51-16.68-4.07-22.74-1.66a17.38,17.38,0,0,0-9.41,8.63l-1.29,3.24-3.09-1.61a11,11,0,0,1-6.07-7.43,12.17,12.17,0,0,1-.07-4.64A86.75,86.75,0,0,0,246.1,93.48c.1.75.2,1.4.29,1.92,10.09,5.35,18.07,14.27,23.71,22.25a104.7,104.7,0,0,1,9.8,16.94l2.47,5.66-5.9-1.15a53,53,0,0,0,12.44,17.07,16.15,16.15,0,0,1,6.28,1,15.49,15.49,0,0,1,5.31,3.45,19.47,19.47,0,0,1,4.49,7,27.61,27.61,0,0,1,3.35,7.66c20-14.07,13.4-30.79,13.09-31.53l-2.48-5.85,6.16,1.58a32.54,32.54,0,0,0,6.43,1c-6.28-10.22-.92-25.55-.69-26.2l1.85-5.19Z" transform="translate(-18.1 -53.2)" />
        <path d="M66.22,129a105.81,105.81,0,0,1,12.2-2.06l.16-.22a49.54,49.54,0,0,1,24.07-17.6c-1,0-1.93.11-2.85.21l-10.71,1.14,8.3-6.86a64.54,64.54,0,0,1,10-6.79,85.1,85.1,0,0,0-16.08-9,12.17,12.17,0,0,1,.57,4.6,11,11,0,0,1-5,8.19l-2.84,2-1.72-3a17.38,17.38,0,0,0-10.5-7.26c-6.34-1.55-13.83.05-22.3,4.76a22.75,22.75,0,0,1,3.9,9.28l.51,3.06-3.05.55A31.41,31.41,0,0,1,42,110l3.27,5-8.79-3.11a6.53,6.53,0,0,0-4.65.5c-2.15,1.12-3.8,3.56-4.92,7.25l-.06.18a42.64,42.64,0,0,0-2.31,9.81l2.1-3.39,2.55,4.89c.32.62,7.73,15.06,2.91,26.05a32.54,32.54,0,0,0,6.23-1.86l5.88-2.41-1.66,6.14c-.2.78-4.42,18.24,17.29,29.44a27.61,27.61,0,0,1,2.27-8,19.47,19.47,0,0,1,3.48-7.55C62.47,167,53.27,146.08,66.22,129Z" transform="translate(-18.1 -53.2)" style={{fill: '#fec869'}} />
        <path d="M90.05,134.68c.71-.69,1.4-1.3,2.07-1.84a44.21,44.21,0,0,0-10.76-.94l-6.93.37,4-5.33A105.81,105.81,0,0,0,66.22,129c-12.95,17.09-3.75,38-.66,43.92a15.49,15.49,0,0,1,4.78-4.14A18.11,18.11,0,0,1,81.9,167a32.24,32.24,0,0,1,.7-3.64c.28-1.11.61-2.18,1-3.18l-4.73,4.93,1.29-9.48.05-.4C81.62,144.77,86.34,138.28,90.05,134.68Z" transform="translate(-18.1 -53.2)" style={{fill: '#f27395'}} />
        <path d="M100.34,212.83a3.19,3.19,0,0,0,1.54-.8A5.19,5.19,0,0,1,100.34,212.83Z" transform="translate(-18.1 -53.2)" style={{fill: '#fec869'}} />
        <path d="M279.55,171a7.19,7.19,0,0,1,3.21-.86c-1.85-2.27-3.69-4.17-5-4.82l-3.46-1.74,2.32-3.1a14.53,14.53,0,0,1,3.86-3.59,55.86,55.86,0,0,1-11.31-18.6,3.88,3.88,0,0,1,2.4-5.87c-4.4-8.19-14.76-24.8-29.53-32l-1.44-.7-.32-1.57c-.2-1-3.72-18.86.62-32.87-4.34,3-8.56,6.54-10.23,9.77l-6.08-2a7.53,7.53,0,0,0-2.19-6.28c.38,3.65.17,7.94-2,11a9.21,9.21,0,0,1-7.92,3.72c-2,0-8.14,0-10.22-4.37a6.38,6.38,0,0,1-.5-3.82h-.86c-15.23.28-22.14,12.54-22.22,12.67l-5.1,9.29-1-10.55a11.63,11.63,0,0,0-2.31-5.19,13.36,13.36,0,0,0-7-4.55c1.67,3.75,3.11,8.57,1.9,12.47l-1,3.16-3.14-1a96.92,96.92,0,0,0-14.66-3.42,41.36,41.36,0,0,0-10.69-.37,31.11,31.11,0,0,1,3.77,5l-3,5a37.93,37.93,0,0,0-6.66.4,55.91,55.91,0,0,0-13.61,3.67h0c-1,.43-2.1.9-3.17,1.42s-2.1,1-3.16,1.65a28.31,28.31,0,0,1,4.91,1q.62.18,1.21.41l.54.21c.44.18.86.38,1.27.6s.61.34.9.53l.44.3a8.21,8.21,0,0,1,2.16,2.25l3.39,5.38-6.34-.42a24.93,24.93,0,0,0-2.92,0c-.83.05-1.82.15-2.93.3l-1.05.16-.13,0a42.83,42.83,0,0,0-23.27,12.06c1.09.11,2.24.26,3.43.47a29.05,29.05,0,0,1,8.56,2.76c.33.18.65.36,1,.55l3.84,2.37.52.32,1.28.79-1.85.69-.68.25-3.68,1.37c-.39.15-8.63,3.48-12.39,14.61a8.48,8.48,0,0,1,3.49.35l4.21,1.34-2.54,3.61a31.26,31.26,0,0,0-5,13.44q-.06.66-.09,1.34a19.62,19.62,0,0,0,0,2,17.46,17.46,0,0,0,.64,3.65,17.19,17.19,0,0,0,4.35,7.31,4.45,4.45,0,0,1,1.12,3.84,5.87,5.87,0,0,1-.91,2.25,11.48,11.48,0,0,1,4.92,3.68l.86,1.09-.2,1.38a100.25,100.25,0,0,1-2.55,12.13l2-.59a2.91,2.91,0,0,1,1.88-.17l2.49.5.11,2.54a2.84,2.84,0,0,1-1,2.51l-.73.79c-1.86,2-3.46,3.71-4.84,5.1a2.85,2.85,0,0,0,1-.44.92.92,0,0,0-.19.26l6,2.28c-1.13,4.51-3.7,17.55-2.26,24.34.41.84,2.21,4.19,5.41,5.1l3.42,1-1.28,3.32a19.4,19.4,0,0,0-.86,3.12l4,1.46-1,3.51c-.52,3.59.12,9.52,8.07,13.91l.34.19.29.27s4.66,4,17.46,7.53a43.25,43.25,0,0,1,4.21,1.37c1.69.63,2.72,1,8.71,1.65l1.27.13.84,1c3.76,4.32,8.56,7.87,11,8.33a13.56,13.56,0,0,1,5.77-6.72c3.38-1.88,7.43-2,12.05-.36l.24.08.22.12c.13.06,4.21,2,10-.85l2.08-1,1.66,1.63a8.57,8.57,0,0,0,7.64,1.71c.11,0,12.47-3.26,16.77-14.71l2.41-6.44,3.43,6c.73,1.27,1.73,4.83-2.46,12.43,5.41-.1,15.91-2.81,29.09-18.55l7-8.38-1.31,10.85c0,.11-.19,1.53-.58,3.57l.51-.49c2.92-3,6.74-9.19,8.36-21.91l.44-3.43,3.4.66a28.11,28.11,0,0,1,5.12,1.58c.27-7.23.94-19.48,2.48-25.22,0-1,.09-5-2.3-7.15a10.84,10.84,0,0,1-2.23-1.38l3.34-5.46a11.6,11.6,0,0,1,2.35,1.3,9.6,9.6,0,0,0,2.8.57c-3.71-5.78-9.58-15.86-10.36-22.88l-.41-3.67,3.7.07a21.39,21.39,0,0,1,7.65,1.67c.2-4.42-.35-9.69-3.37-11.59l-1.72-1.08.22-2A5.44,5.44,0,0,1,279.55,171Z" transform="translate(-18.1 -53.2)" style={{fill: '#fec869'}} />
        <path d="M97.19,207.57a4.87,4.87,0,0,1,1.09-.84A3.25,3.25,0,0,0,97.19,207.57Z" transform="translate(-18.1 -53.2)" style={{fill: '#fec869'}} />
        <path d="M303.37,281.2a2.94,2.94,0,0,0,1.83-1.33,3,3,0,0,0-.33-3.37c-8.94-11.15-22.34-24.55-30.74-32.65-.79-.76-.23-2.15.76-1.89,4.81,1.24,9.49,2.68,12.93,3.78a3.18,3.18,0,0,0,4.12-1.77,3.1,3.1,0,0,0-1.26-3.52c-10.7-7.51-26.45-18.66-31.07-21.93a1,1,0,0,0-.9-.14,2,2,0,0,0-.4,3.47c3.72,2.63,13.24,9.37,22.18,15.68,1,.68.44,2.31-.65,2-3.06-.87-6.33-1.72-9.5-2.42a3,3,0,0,0-2.89,5.06c6,5.72,19.93,19.1,30.51,31.3.76.87,0,2.22-1,1.77-16.29-7.43-46.25-20-63.27-20.48a.91.91,0,0,0-.86,1.08l.14,1.51a1.2,1.2,0,0,0,1.07,1.14c7,.26,25.9,3.24,66.81,22.47A3.73,3.73,0,0,0,303.37,281.2Z" transform="translate(-18.1 -53.2)" style={{fill: '#231f20'}} />
        <path d="M161.39,230.53c-.23,8.43-6.78,15.09-15.21,14.86a15.27,15.27,0,1,1,.84-30.53C155.44,215.09,161.62,222.1,161.39,230.53Z" transform="translate(-18.1 -53.2)" style={{fill: '#fff'}} />
        <path d="M160.41,229c-.23,8.43-6.78,15.09-15.22,14.86a15.27,15.27,0,1,1,.84-30.53C154.47,213.58,160.64,220.58,160.41,229Z" transform="translate(-18.1 -53.2)" style={{fill: '#231f20'}} />
        <circle cx="146.44" cy="230.02" r="10.54" transform="translate(-105.62 316.87) rotate(-88.42)" style={{fill: '#231f20'}} />
        <circle cx="140.81" cy="224.07" r="5.33" transform="translate(-105.15 305.46) rotate(-88.42)" style={{fill: '#fff'}} />
        <path d="M146.49,224.23a5.68,5.68,0,1,0-5.83,5.52h.26A5.69,5.69,0,0,0,146.49,224.23Zm-5.54-5.13a5,5,0,0,1,4.84,5.11h0a5,5,0,1,1-5.07-5.11Z" transform="translate(-18.1 -53.2)" style={{fill: '#231f20'}} />
        <circle cx="152.9" cy="223.06" r="2.81" transform="translate(-92.37 316.56) rotate(-88.42)" style={{fill: '#fff'}} />
        <path d="M156.06,223.14a3.16,3.16,0,1,0-6.31-.17h0a3.16,3.16,0,0,0,3.07,3.24H153A3.16,3.16,0,0,0,156.06,223.14Zm-5.61-.15a2.46,2.46,0,1,1,2.39,2.52,2.44,2.44,0,0,1-2.39-2.52Z" transform="translate(-18.1 -53.2)" style={{fill: '#231f20'}} />
        <path d="M139.74,216.92" transform="translate(-18.1 -53.2)" style={{fill: '#231f20', stroke: '#231f20', strokeWidth: 3}} />
        <path d="M155.21,217" transform="translate(-18.1 -53.2)" style={{fill: '#231f20', stroke: '#231f20', strokeWidth: 3}} />
        <path d="M207.14,252.22h0c1.76,10-2.6,19.2-9.68,20.45l-11.34,2c-7.08,1.25-14.32-5.91-16.08-15.91h0C168.28,248.75,205.38,242.22,207.14,252.22Z" transform="translate(-18.1 -53.2)" style={{fill: '#fff'}} />
        <path d="M208.39,252.82h0c1.76,10-2.6,19.2-9.68,20.45l-11.34,2c-7.08,1.25-14.32-5.91-16.08-15.91h0C169.54,249.35,206.63,242.82,208.39,252.82Z" transform="translate(-18.1 -53.2)" style={{fill: '#231f20'}} />
        <path d="M246.83,224.25c-.23,8.43-6.78,15.09-15.21,14.86a15.27,15.27,0,1,1,.84-30.53C240.89,208.8,247.07,215.81,246.83,224.25Z" transform="translate(-18.1 -53.2)" style={{fill: '#fff'}} />
        <path d="M245.86,222.73c-.23,8.43-6.78,15.09-15.22,14.86a15.27,15.27,0,1,1,.84-30.53C239.91,207.29,246.09,214.3,245.86,222.73Z" transform="translate(-18.1 -53.2)" style={{fill: '#231f20'}} />
        <circle cx="231.88" cy="223.73" r="10.54" transform="translate(-16.24 396.17) rotate(-88.42)" style={{fill: '#231f20'}} />
        <circle cx="226.26" cy="217.78" r="5.33" transform="translate(-15.77 384.76) rotate(-88.42)" style={{fill: '#fff'}} />
        <path d="M231.93,217.94h0a5.68,5.68,0,1,0-5.83,5.52h.26A5.69,5.69,0,0,0,231.93,217.94Zm-5.54-5.13a5,5,0,0,1,4.84,5.11h0a5,5,0,1,1-5.07-5.11Z" transform="translate(-18.1 -53.2)" style={{fill: '#231f20'}} />
        <circle cx="238.35" cy="216.77" r="2.81" transform="translate(-2.99 395.86) rotate(-88.42)" style={{fill: '#fff'}} />
        <path d="M241.51,216.86a3.16,3.16,0,1,0-3.24,3.07h.15A3.16,3.16,0,0,0,241.51,216.86Zm-3.09-2.54a2.46,2.46,0,1,1-2.52,2.39h0a2.46,2.46,0,0,1,2.41-2.39Z" transform="translate(-18.1 -53.2)" style={{fill: '#231f20'}} />
        <path d="M225.19,210.63" transform="translate(-18.1 -53.2)" style={{fill: '#231f20', stroke: '#231f20', strokeWidth: 3}} />
        <path d="M240.66,210.69" transform="translate(-18.1 -53.2)" style={{fill: '#231f20', stroke: '#231f20', strokeWidth: 3}} />
        <path d="M77.21,292.41a3.27,3.27,0,0,1-2.07-1,2.37,2.37,0,0,1-.22-3c7.19-10.86,18.5-24.21,25.64-32.32a1,1,0,0,0-1.08-1.58c-4.65,1.66-9.13,3.46-12.42,4.84a3.6,3.6,0,0,1-4.44-1.07,2.46,2.46,0,0,1,.7-3.24c9.56-7.86,23.61-19.5,27.74-22.92a1.05,1.05,0,0,1,.88-.23,1.72,1.72,0,0,1,1,3c-3.32,2.75-11.81,9.79-19.8,16.38a1,1,0,0,0,1,1.68c2.95-1.12,6.1-2.26,9.18-3.24a3.5,3.5,0,0,1,4.05,1.13,2.42,2.42,0,0,1-.31,3C101.85,259.6,90,273,81.38,285a1,1,0,0,0,1.28,1.44C97.87,278,126,263.4,143.12,261a.92.92,0,0,1,1,.85l.11,1.35a1.05,1.05,0,0,1-.89,1.13c-7,1-25.6,5.88-63.7,27.58A4.19,4.19,0,0,1,77.21,292.41Z" transform="translate(-18.1 -53.2)" style={{fill: '#231f20'}} />
      </svg>
    )
  }
}

export default Dog;