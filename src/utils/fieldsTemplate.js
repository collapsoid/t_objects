export const targetObjectsTemplate = [
  {
    type: "group",
    items: [
      {
        input: {
          name: "date",
          type: "text",
          "data-type": "date",
          "data-not_editable": true,
          "data-img": "date",
          value: "01/01/1970 00:00:00",
          required: true,
          disabled: true
        },
        label: "ДАТА И ВРЕМЯ ОТСЧЕТА"
      },
      {
        input: {
          name: "searchPriority",
          type: "number",
          "data-type": "value",
          "data-float": false,
          min: 1,
          placeholder: "От 1",
          required: true
        },
        error: "Введите значение от 1",
        label: "ПРИОРИТЕТ ПОИСКА (ОТ 1)"
      },
      {
        input: {
          name: "planes",
          type: "number",
          "data-type": "value",
          "data-float": false,
          min: 1,
          placeholder: "От 1",
          required: true
        },
        error: "Введите значение от 1",
        label: "КОЛИЧЕСТВО ПЛОСКОСТЕЙ"
      },
      {
        input: {
          name: "objectsOnPlane",
          type: "number",
          "data-type": "value",
          "data-float": false,
          min: 1,
          placeholder: "От 1",
          required: true
        },
        error: "Введите значение от 1",
        label: "КОЛИЧЕСТВО ОБЪЕКТОВ НА ПЛОСКОСТИ"
      }
    ]
  },
  {
    type: "group",
    items: [
      {
        input: {
          name: "orbitalInclination",
          type: "text",
          "data-type": "value",
          "data-float": true,
          min: 0,
          max: 180, 
          placeholder: "От 0 до 180°",
          required: true
        },
        error: "Введите значение от 0 до 180°",
        label: "НАКЛОНЕНИЕ ОРБИТЫ"
      },
      {
        input: {
          name: "pericenter",
          type: "text",
          "data-type": "value",
          "data-float": true,
          min: 0,
          max: 360,
          placeholder: "От 0 до 360°",
          required: true
        },
        error: "Введите значение от 0 до 360°",
        label: "АРГУМЕНТ ПЕРИЦЕНТРА"
      },
      {
        input: {
          name: "semiMajorAxis",
          type: "text",
          "data-type": "value",
          "data-float": true,
          min: 6480,
          max: 40000,
          placeholder: "От 6480 до 40000 км",
          required: true
        },
        error: "Введите значение от 6480 до 40000",
        label: "БОЛЬШАЯ ПОЛУОСЬ"
      }
    ]
  },
  {
    type: "group",
    items: [
      {
        input: {
          name: "eccentricity",
          type: "text",
          "data-type": "value",
          "data-float": true,
          min: 0,
          max: 1,
          placeholder: "От 0,0 до 1,0",
          required: true
        },
        error: "Введите значение от 0,0 до 1,0",
        label: "ЭКСЦЕНТРИСИТЕТ"
      },
      {
        input: {
          name: "ascendingLongtitude",
          type: "text",
          "data-type": "value",
          "data-float": true,
          min: 0,
          max: 180,
          placeholder: "От 0 до 180° первого объекта",
          required: true
        },
        error: "Введите значение от 0 до 180°",
        label: "ДОЛГОТА ВОСХОДЯЩЕГО УЗЛА"
      },
      {
        input: {
          name: "anomaly",
          type: "text",
          "data-type": "value",
          "data-float": true,
          min: 0,
          max: 360,
          placeholder: "От 0 до 360° первого объекта",
          required: true
        },
        error: "Введите значение от 0 до 360°",
        label: "ИСТИННАЯ АНОМАЛИЯ"
      }
    ]
  },
  {
    type: "group",
    items: [
      {
        input: {
          name: "blackness",
          type: "text",
          "data-type": "value",
          "data-float": true,
          min: 0,
          max: 1,
          placeholder: "От 0,0 до 1,0",
          required: true
        },
        error: "Введите значение от 0,0 до 1,0",
        label: "СТЕПЕНЬ ЧЕРНОТЫ" 
      },
      {
        input: {
          name: "linearDimension",
          type: "text",
          "data-type": "value",
          "data-float": true,
          min: 0,
          placeholder: "От 0,0 метра",
          required: true
        },
        error: "Введите значение от 0,0",
        label: "ЛИНЕЙНЫЙ РАЗМЕР"
      },
      {

        input: {
          name: "mass",
          type: "text",
          "data-type": "value",
          "data-float": true,
          min: 0,
          placeholder: "От 0,0 килограмма",
          required: true
        },
        error: "Введите значение от 0,0",
        label: "МАССА" 
      },
      {
        input: {
          name: "dragCoefficient",
          type: "text",
          "data-type": "value",
          "data-float": true,
          min: 0,
          max: 2,
          placeholder: "От 0,0 до 2,0",
          required: true
        },
        error: "Введите значение от 0,0 до 2,0",
        label: "КОЭФФИЦИЕНТ ЛОБОВОГО СОПРОТИВЛЕНИЯ" 
      }
    ]
  }
];