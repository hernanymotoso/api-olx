import State, { IState } from '../entities/State';

class ListStateService {
  public async execute(): Promise<IState[]> {
    const states = await State.find();

    if (states.length <= 0) {
      throw new Error('States not found');
    }

    // console.log('teste');
    return states;
  }
}

export default ListStateService;
