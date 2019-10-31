export class Graph {
    options: Options = new Options();
    title: string = 'Graph'
    labels: Array<string> = ['Jan', 'feb', 'Mar'];
    type: string = 'bar';
    legend: Boolean = true;
    data: Array<Data>;
}

export class Options {
    scaleShowVerticalLines: Boolean = false;
    responsive: Boolean = true;
}

export class Data {
    data: Array<number> = [65, 59, 80];
    label: string = 'Series A';
}
