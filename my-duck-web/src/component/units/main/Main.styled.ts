import styled from '@emotion/styled';

export const StyleWrapper = styled.div`
.fc-media-screen {
  width: 60%;
  margin: 0 auto;
}
.fc-button.fc-prev-button, 
.fc-button.fc-next-button, 
.fc-button.fc-button-primary{
    background: #ffdba6;
    background-image: none;
    border: none;
}

.fc-today-button {
  display: none;
}

.fc-daygrid-day-frame {
  height: 150px;
}

.fc-daygrid-day-frame:hover{
  background-color: #f0f0f0;
}


.fc-daygrid-day-top{}

.fc-day-number.fc-sun.fc-past { color:#FF0000; }

`