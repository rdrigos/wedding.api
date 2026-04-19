import { Entity, EntityMetadata } from '@/core/entities/entity';
import { GuestStatus } from '@/modules/guests/domain/enums/guest-status.enum';

export interface GuestProps {
  name: string;
  status: GuestStatus;
  phone: string;
  observation?: string;
}

export class Guest extends Entity<GuestProps> {
  get name(): string {
    return this.props.name;
  }

  get status(): GuestStatus {
    return this.props.status;
  }

  get phone(): string {
    return this.props.phone;
  }

  get observation(): string | undefined {
    return this.props.observation;
  }

  public static create(props: GuestProps, metadata: EntityMetadata): Guest {
    return new Guest(props, metadata);
  }
}
