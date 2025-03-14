export type Event = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export interface HomeProps {
  data: Event[];
}
